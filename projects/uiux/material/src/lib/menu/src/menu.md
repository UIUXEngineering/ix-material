`<ix-menu>` is a floating panel containing list of options.

<!-- example(menu-overview) -->

By itself, the `<ix-menu>` element does not render anything. The menu is attached to and opened
via application of the `ixMenuTriggerFor` directive:
```html
<ix-menu #appMenu="ixMenu">
  <button ix-menu-item>Settings</button>
  <button ix-menu-item>Help</button>
</ix-menu>

<button mat-icon-button [ixMenuTriggerFor]="appMenu">
  <mat-icon>more_vert</mat-icon>
</button>
```

### Toggling the menu programmatically
The menu exposes an API to open/close programmatically. Please note that in this case, an
`ixMenuTriggerFor` directive is still necessary to attach the menu to a trigger element in the DOM.

```ts
class MyComponent {
  @ViewChild(IxMenuTrigger) trigger: IxMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }
}
```

### Icons
Menus support displaying `mat-icon` elements before the menu item text.

*my-comp.html*
```html
<ix-menu #menu="ixMenu">
  <button ix-menu-item>
    <mat-icon>dialpad</mat-icon>
    <span>Redial</span>
  </button>
  <button ix-menu-item disabled>
    <mat-icon>voicemail</mat-icon>
    <span>Check voicemail</span>
  </button>
  <button ix-menu-item>
    <mat-icon>notifications_off</mat-icon>
    <span>Disable alerts</span>
  </button>
</ix-menu>
```

### Customizing menu position

By default, the menu will display below (y-axis), after (x-axis), and overlapping its trigger.
The position can be changed using the `xPosition` (`before | after`) and `yPosition`
(`above | below`) attributes. The menu can be be forced to not overlap the trigger using
`[overlapTrigger]="false"` attribute.

```html
<ix-menu #appMenu="ixMenu" yPosition="above">
  <button ix-menu-item>Settings</button>
  <button ix-menu-item>Help</button>
</ix-menu>

<button mat-icon-button [ixMenuTriggerFor]="appMenu">
  <mat-icon>more_vert</mat-icon>
</button>
```

### Nested menu

Material supports the ability for an `ix-menu-item` to open a sub-menu. To do so, you have to define
your root menu and sub-menus, in addition to setting the `[ixMenuTriggerFor]` on the `ix-menu-item`
that should trigger the sub-menu:

```html
<ix-menu #rootMenu="ixMenu">
  <button ix-menu-item [ixMenuTriggerFor]="subMenu">Power</button>
  <button ix-menu-item>System settings</button>
</ix-menu>

<ix-menu #subMenu="ixMenu">
  <button ix-menu-item>Shut down</button>
  <button ix-menu-item>Restart</button>
  <button ix-menu-item>Hibernate</button>
</ix-menu>

<button mat-icon-button [ixMenuTriggerFor]="rootMenu">
  <mat-icon>more_vert</mat-icon>
</button>
```

<!-- example(nested-menu) -->

### Lazy rendering
By default, the menu content will be initialized even when the panel is closed. To defer
initialization until the menu is open, the content can be provided as an `ng-template`
with the `ixMenuContent` attribute:

```html
<ix-menu #appMenu="ixMenu">
  <ng-template ixMenuContent>
    <button ix-menu-item>Settings</button>
    <button ix-menu-item>Help</button>
  </ng-template>
</ix-menu>

<button mat-icon-button [ixMenuTriggerFor]="appMenu">
  <mat-icon>more_vert</mat-icon>
</button>
```

### Passing in data to a menu
When using lazy rendering, additional context data can be passed to the menu panel via
the `ixMenuTriggerData` input. This allows for a single menu instance to be rendered
with a different set of data, depending on the trigger that opened it:

```html
<ix-menu #appMenu="ixMenu">
  <ng-template ixMenuContent let-name="name">
    <button ix-menu-item>Settings</button>
    <button ix-menu-item>Log off {{name}}</button>
  </ng-template>
</ix-menu>

<button mat-icon-button [ixMenuTriggerFor]="appMenu" [ixMenuTriggerData]="{name: 'Sally'}">
  <mat-icon>more_vert</mat-icon>
</button>

<button mat-icon-button [ixMenuTriggerFor]="appMenu" [ixMenuTriggerData]="{name: 'Bob'}">
  <mat-icon>more_vert</mat-icon>
</button>
```

### Keyboard interaction
- <kbd>DOWN_ARROW</kbd>: Focuses the next menu item
- <kbd>UP_ARROW</kbd>: Focuses previous menu item
- <kbd>RIGHT_ARROW</kbd>: Opens the menu item's sub-menu
- <kbd>LEFT_ARROW</kbd>: Closes the current menu, if it is a sub-menu.
- <kbd>ENTER</kbd>: Activates the focused menu item

### Accessibility
Menu triggers or menu items without text or labels should be given a meaningful label via
`aria-label` or `aria-labelledby`.
