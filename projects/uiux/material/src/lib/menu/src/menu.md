`<sp-menu>` is a floating panel containing list of options.

<!-- example(menu-overview) -->

By itself, the `<sp-menu>` element does not render anything. The menu is attached to and opened
via application of the `SPMenuTriggerFor` directive:
```html
<sp-menu #appMenu="SPMenu">
  <button sp-menu-item>Settings</button>
  <button sp-menu-item>Help</button>
</sp-menu>

<button mat-icon-button [SPMenuTriggerFor]="appMenu">
  <mat-icon>more_vert</mat-icon>
</button>
```

### Toggling the menu programmatically
The menu exposes an API to open/close programmatically. Please note that in this case, an
`SPMenuTriggerFor` directive is still necessary to attach the menu to a trigger element in the DOM.

```ts
class MyComponent {
  @ViewChild(SPMenuTrigger) trigger: SPMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }
}
```

### Icons
Menus support displaying `mat-icon` elements before the menu item text.

*my-comp.html*
```html
<sp-menu #menu="SPMenu">
  <button sp-menu-item>
    <mat-icon>dialpad</mat-icon>
    <span>Redial</span>
  </button>
  <button sp-menu-item disabled>
    <mat-icon>voicemail</mat-icon>
    <span>Check voicemail</span>
  </button>
  <button sp-menu-item>
    <mat-icon>notifications_off</mat-icon>
    <span>Disable alerts</span>
  </button>
</sp-menu>
```

### Customizing menu position

By default, the menu will display below (y-axis), after (x-axis), and overlapping its trigger.
The position can be changed using the `xPosition` (`before | after`) and `yPosition`
(`above | below`) attributes. The menu can be be forced to not overlap the trigger using
`[overlapTrigger]="false"` attribute.

```html
<sp-menu #appMenu="SPMenu" yPosition="above">
  <button sp-menu-item>Settings</button>
  <button sp-menu-item>Help</button>
</sp-menu>

<button mat-icon-button [SPMenuTriggerFor]="appMenu">
  <mat-icon>more_vert</mat-icon>
</button>
```

### Nested menu

Material supports the ability for an `sp-menu-item` to open a sub-menu. To do so, you have to define
your root menu and sub-menus, in addition to setting the `[SPMenuTriggerFor]` on the `sp-menu-item`
that should trigger the sub-menu:

```html
<sp-menu #rootMenu="SPMenu">
  <button sp-menu-item [SPMenuTriggerFor]="subMenu">Power</button>
  <button sp-menu-item>System settings</button>
</sp-menu>

<sp-menu #subMenu="SPMenu">
  <button sp-menu-item>Shut down</button>
  <button sp-menu-item>Restart</button>
  <button sp-menu-item>Hibernate</button>
</sp-menu>

<button mat-icon-button [SPMenuTriggerFor]="rootMenu">
  <mat-icon>more_vert</mat-icon>
</button>
```

<!-- example(nested-menu) -->

### Lazy rendering
By default, the menu content will be initialized even when the panel is closed. To defer
initialization until the menu is open, the content can be provided as an `ng-template`
with the `SPMenuContent` attribute:

```html
<sp-menu #appMenu="SPMenu">
  <ng-template SPMenuContent>
    <button sp-menu-item>Settings</button>
    <button sp-menu-item>Help</button>
  </ng-template>
</sp-menu>

<button mat-icon-button [SPMenuTriggerFor]="appMenu">
  <mat-icon>more_vert</mat-icon>
</button>
```

### Passing in data to a menu
When using lazy rendering, additional context data can be passed to the menu panel via
the `SPMenuTriggerData` input. This allows for a single menu instance to be rendered
with a different set of data, depending on the trigger that opened it:

```html
<sp-menu #appMenu="SPMenu">
  <ng-template SPMenuContent let-name="name">
    <button sp-menu-item>Settings</button>
    <button sp-menu-item>Log off {{name}}</button>
  </ng-template>
</sp-menu>

<button mat-icon-button [SPMenuTriggerFor]="appMenu" [SPMenuTriggerData]="{name: 'Sally'}">
  <mat-icon>more_vert</mat-icon>
</button>

<button mat-icon-button [SPMenuTriggerFor]="appMenu" [SPMenuTriggerData]="{name: 'Bob'}">
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
