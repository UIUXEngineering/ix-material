import { Observable, Observer } from 'rxjs';
import { CordovaWindow, DirectoryEntry, FileSystem, LocalFileSystem } from '../cordova.interfaces';

export class SpoutSoundFileCache {
  constructor(private window: CordovaWindow) {}

  save(uuid: string): Observable<any> {
    return new Observable((observer: Observer<any>) => {
      // TODO need SoundNode
      // (<CordovaWindow>this.window).requestFileSystem(LocalFileSystem.PERSISTENT, 0, ( fs: FileSystem ) => {
      //
      //   fs.root.getDirectory(uuid, { create: true }, (dirEntry: DirectoryEntry) => {
      //     dirEntry.getFile(fileName, { create: true, exclusive: false }, function (fileEntry) {
      //
      //       writeFile(fileEntry, fileData);
      //
      //     }, onErrorCreateFile);
      //   })
      //
      // });
    });
  }
}
