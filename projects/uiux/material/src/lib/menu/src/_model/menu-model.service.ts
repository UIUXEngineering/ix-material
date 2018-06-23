/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import {Injectable, Optional, SkipSelf} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SPMenuSubject extends Subject<string> {
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
@Injectable()
export class SPMenuModel {
    private _cache: { [ key: string]: SPMenuSubject } = {};

    getModelByID(_id: string): SPMenuSubject {
        if (!this._cache[_id]) {
            this._cache[_id] = new SPMenuSubject();
        }

        return this._cache[_id];
    }
}

/** @docs-private */
export function _MENU_MODEL_FACTORY( parentDispatcher: SPMenuModel): SPMenuModel {
    return parentDispatcher || new SPMenuModel();
}

export const MENU_MODEL_PROVIDER = {
    provide: SPMenuModel,
    deps: [
        [new Optional(), new SkipSelf(), SPMenuModel]
    ],
    useFactory: _MENU_MODEL_FACTORY,
};
