/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import {Injectable, Optional, SkipSelf} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable({
              providedIn: 'root',
            })
export class IxMenuSubject extends Subject<string> {
    constructor() {
        super();
    }

    close(): void {
        super.next('close');
    }
}


/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
@Injectable({
              providedIn: 'root',
            })
export class IxMenuModel {
    private _cache: { [ key: string]: IxMenuSubject } = {};

    getModelByID(_id: string): IxMenuSubject {
        if (!this._cache[_id]) {
            this._cache[_id] = new IxMenuSubject();
        }

        return this._cache[_id];
    }
}

/** @docs-private */
export function _MENU_MODEL_FACTORY( parentDispatcher: IxMenuModel): IxMenuModel {
    return parentDispatcher || new IxMenuModel();
}

export const MENU_MODEL_PROVIDER = {
    provide: IxMenuModel,
    deps: [
        [new Optional(), new SkipSelf(), IxMenuModel]
    ],
    useFactory: _MENU_MODEL_FACTORY,
};
