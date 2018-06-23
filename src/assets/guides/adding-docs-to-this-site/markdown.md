### Why Use Markdown

You can copy a markdown file directly to this repo, and simply wire it up to display in the guides section. Or you may prefer to write guides in markdown rather than HTML.

### Steps to add a Guide using a markdown file.

When adding markdown files and documentation components, directory structures should follow a common category structure as referenced in the `src/configs/nav-items.ts` ROUTES object.

Using the document you are currently reading as an example...

#### 1. Add the markdown file to assets directory

Add the markdown file in the directory `src/assets/guides/adding-docs-to-this-site/`. The full path beign `src/assets/guides/adding-docs-to-this-site/markdown.md`.


#### 2. Add a route and config nav-items.ts

Add the guide config in the file ```src/configs/nav-items.ts```. Copy a config from the Guide section, and configure for your guide.

#### 3. Add an Angular Component to Contain Guide

The right sidenav menu is auto-generated based on markdown syntax. To facilitate the menu auto-generation, create a wrapper component in the directory `./src/app/views/guides`. Follow the same pattern as other guides. The directory structure should follow the route structure you added in step 1. So this guide would be contained in the component `src/app/views/guides/adding-docs-to-this-site/guide-markdown.component.ts`

The component will contain a property that maps to the confing in `src/configs/nav-items.ts`, and a template that uses the markdown container -- `<markdown-container>`

  ```typescript
  
  @Component({
    selector: 'adding-docs-to-this-site',
    template: `<markdown-container [data]="data"></markdown-container>`
  })
  export class GuideMarkdownComponent {
    // path to config in `src/configs/nav-items.ts`
    data: IDataItem = ROUTES.guides['adding-docs-to-this-site'].markdown;
  }
  
  ```
  
  Add component to `NgModules` in the file `src/app/views/guides/guides.module.ts`.

#### 4. Add route to guides-routing.module.ts

In the file `src/app/views/guides/guides-routing.module.ts` add your route. Make sure your url route matches your config route in ```src/configs/nav-items.ts```.

For example: 

  ```typescript
  // in `src/app/views/guides/guides-routing.module.ts`
  
  {
    // end route matches route in `src/configs/nav-items.ts`
    path: 'adding-docs-to-this-site/markdown',
    component: GuideMarkdownComponent,
  },
  ```
#### 5. Documention Styles

See the documentation you are reading as an example. The main points are:

  1. Your largest heading should be using `###`. Every sub-heading ( `####` for example ) will be indented in the menu tree.
  2. For code blocks, annotate with code language for proper syntax hightlighting.
