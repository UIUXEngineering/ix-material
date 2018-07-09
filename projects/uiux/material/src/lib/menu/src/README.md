Please see the official documentation at https://material.angular.io/components/component/menu

## Migrating Material Menu to this Reop

1.  Run package script:

    ```
    yarn copy.menu
    ```

2. Fix scss imports
3. Rename `public-api.ts` to `public_api.ts`
4. Fix `public_api.ts` imports
5. Fix scss imports to cdk
6. Rename `mat-menu` to `ix-menu`
   Search files in menu and styles directories
   
7. Change `IxMenu` to `IxMenu`
   
   Preserve Case in WebStorm

8. Change `./index` to `../index`
   ```
   projects/uiux/material/src/lib/menu/src/menu.spec.ts(30,8)
   ```
   
9. Change `@angular/cdk/testing` to  `@uiux/cdk/testing`
   ```
   projects/uiux/material/src/lib/menu/src/menu.spec.ts(42,8)
   ```
