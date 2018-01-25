401 JS --  Lab 34 Budget Tracker
===

## start : npm start watch
## test : npm test

##### Components
add and refactor  the following components and organzie them according to the following tree
```
App
  Provider
    BrowserRouter
      Route / Dashboard
        CategoryForm -- for creating categorys
        [Category Item] -- list of Category items
           Dropzone
             CategoryForm  -- for updating categorys
             ExpenseForm -- for creating expenses
             [ExpenseItem]  -- list of expense items
                Draggable
                  ExpenseForm -- for updating an expense
```
###### Daggable
* Create a component that enable users to drag its children
* It store data passed into its `dataTransferItem` prop on the event handler for `onDragStart`
  * data should be stored as json under the MIME 'application/json'

###### Dropable
* Create a component that enables users to drop a Draggable component
* onDrop it should invoke a callback with the data passed using the events dataTransferObject
  * remember to parse the json
