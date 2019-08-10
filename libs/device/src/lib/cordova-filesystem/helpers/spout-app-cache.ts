import { hasValue } from '@uiux/fn';
import { Observable, Observer, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import {
  CordovaWindow,
  DirectoryEntry,
  FileEntry,
  FileError,
  FileSystem,
  FileWriter,
  LocalFileSystem,
  ReadFileFunction,
  SpoutAppCacheDictionary,
  WriteFileFunction
} from '../cordova.interfaces';

const SPOUT_APP_CACHE_DICTIONARY = 'spoutAppCache.json';

export const initialCacheData: SpoutAppCacheDictionary = {
  projects: {}
};

export class SpoutAppCache {

  constructor( private window: CordovaWindow ) {}

  getAppDataCacheJson(): Observable<SpoutAppCacheDictionary> {

    const writeFile: WriteFileFunction = this.writeJsonFile.bind(this);
    const readFile: ReadFileFunction = this.readJsonFile.bind(this);

    return new Observable(( observer: Observer<any> ) => {

      (<CordovaWindow>this.window).requestFileSystem(LocalFileSystem.PERSISTENT, 0, ( fs: FileSystem ) => {
        // console.log('file system open: ' + fs.name);
        fs.root.getFile(SPOUT_APP_CACHE_DICTIONARY, {
          create: true,
          exclusive: false
        }, function( fileEntry: FileEntry ) {

          const isFile: boolean = fileEntry.isFile;

          if ( isFile ) {
            readFile(fileEntry)
              .pipe(
                mergeMap(( data: any ) => {
                  if ( hasValue(data) ) {
                    return of(data);
                  } else {
                    return writeFile(fileEntry, initialCacheData);
                  }
                })
              )
              .subscribe(( data: SpoutAppCacheDictionary ) => {
                observer.next(data);
              });
          }

          // console.log('fileEntry is file?' + fileEntry.isFile.toString());
          // // fileEntry.name == 'someFile.txt'
          // // fileEntry.fullPath == '/someFile.txt'
          // writeFile(fileEntry, null);

        }, ( error: FileError ) => {
          observer.error(error);
        });

      }, ( fileError: FileError ) => {
        observer.error(fileError);
      });

    });
  }

  /**
   * Returns object not json
   * @param fileEntry
   * @param dataObj
   */
  private writeJsonFile( fileEntry: FileEntry, dataObj: any ): Observable<SpoutAppCacheDictionary> {
    return new Observable(( observer: Observer<any> ) => {
      // Create a FileWriter object for our FileEntry (log.txt).
      fileEntry.createWriter(function( fileWriter: FileWriter ) {

        fileWriter.onwriteend = function() {
          // console.log('Successful file read...');
        };

        fileWriter.onerror = function( e ) {
          // console.log('Failed file read: ' + e.toString());
        };

        // const payload = JSON.stringify(dataObj);

        fileWriter.write(dataObj);

        observer.next(dataObj);
      }, ( error: FileError ) => {
        observer.error(error);
      });
    });
  }

  private readJsonFile( fileEntry: FileEntry ): Observable<SpoutAppCacheDictionary> {

    return new Observable(( observer: Observer<any> ) => {

      fileEntry.file(function( file ) {
        const reader = new FileReader();

        reader.onloadend = function() {
          // console.log('Successful file read: ' + this.result);
          let result: string;
          try {
            result = JSON.parse(<string>reader.result);
          } catch ( e ) {
            /* noop */
          }
          observer.next(result);
        };

        reader.readAsText(file);

      }, ( error: FileError ) => {
        observer.error(error);
      });

    });
  }

  save( data: SpoutAppCacheDictionary ): Observable<SpoutAppCacheDictionary> {
    const writeFile: WriteFileFunction = this.writeJsonFile.bind(this);

    return new Observable(( observer: Observer<any> ) => {

      (<CordovaWindow>this.window).requestFileSystem(LocalFileSystem.PERSISTENT, 0, ( fs: FileSystem ) => {
        console.log('file system open: ' + fs.name);
        fs.root.getFile(SPOUT_APP_CACHE_DICTIONARY, {
          create: true,
          exclusive: false
        }, function( fileEntry: FileEntry ) {

          writeFile(fileEntry, data)
            .subscribe(( _data: SpoutAppCacheDictionary ) => {
              observer.next(_data);
            });

          // console.log('fileEntry is file?' + fileEntry.isFile.toString());
          // // fileEntry.name == 'someFile.txt'
          // // fileEntry.fullPath == '/someFile.txt'
          // writeFile(fileEntry, null);

        }, ( error: FileError ) => {
          observer.error(error);
        });

      }, ( fileError: FileError ) => {
        observer.error(fileError);
      });

    });
  }


}
