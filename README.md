# Breaking Bad Leaflet

#### Website which uses [_The Breaking Bad API_](https://breakingbadapi.com/) to display information about Breaking Bad movie series.

## Design patterns

### Proxy (Api):

- Used to simplify and speed up retrieving and accessing data
- Provides simple checks which make sure that there aren't any unnecessary API calls
- Any changes to the inner storage of data don't imply changes to components, only proxy file has to be changed
- Adding new data objects (e.g., character, episode) is easily done in proxy class

##### File: main/api

### Singleton:

- Api Proxy:
  - File only exports instantiated object, not the actual class
  - Global access provided by exporting BreakingBadApi's instantiated object
  - Ensure that all components work with the same object to provide best performance (caching etc.)
- Data facade:
  - File only exports instantiated object, not the actual class (same as Api Proxy)
  - Global access provided by exporting Data's instantiated object
  - Ensure that all components work with the same object
- Redux store:
  - Global access to the main store
  - All of the data which is shown to user stored in a store
  - Ease debugging, snapshotting and sending / restoring state from a server or a local storage
  - Ensure that there is only one place to look for different states or changes within application

##### Files: main/api/index.ts (Api Proxy), main/data/index.ts (Data facade), main/store.ts (Redux store)

### Facade (Data):

- Used to provide a simplified interface for components
- Encapsulates core data functionalities under simple and semantic methods
- Extracts logic from components
- Easier to extend

##### File: main/data.index.ts

### Composite:

- Everything is represented as a component
- Each component is a leaf of the tree and can compose multiple components together to create a new leaf (in that case it's a composite but is still a leaf of the tree)
- Highly convenient to build scalable applications that utilize many objects
- Reusable interface

##### Files: modules/App.index.ts, modules/SearchParams/index.ts

### Command:

- Store = Receiver: instantiated with reducers - descriptions on how the store change, given a command knows how to fulfill that request
- Action = Command: actions contain description of the command (type) and parameters it needs to execute state change (payload)
- Dispatch = Executor: dispatch actions to change the state of application

##### Files: main/store/store.ts (store), library/common/actions.ts (action), main/api/index.ts (dispatch)

### Dependency injection (Results):

- Results component doesn't display the results, instead it delegates the rendering to its child components (Character, Episode etc.)
- Results depend on its child components for the rendering
- Caller of Results sets this dependency - in this case, SearchParams (searchParamType and objects)
- Changing the dependency is very easy - replace the child of Results by another component

##### Files: modules/Results/index.ts, modules/SearchParams/index.ts

### Observer:

- React:
  - The observers are the components holding the state
  - The parent is the subject notifying the observers
- Redux:
  - Steps in when parent wants to pass the state to grandchild directly without having to re-render the intermediate child
  - Any component in the app can observe any part of the store
  - Component listens to a specific slice of the app state
  - Whenever the slice of state this component is listening to changes, the component rerenders
  - An observer is observing only the relevant slice of the app state instead of the entire app state (observer only updated when necessary)

##### Files: library/common/components/Header/index.tsx

### Factory:

- Results component should not be concerned with what to render based on payload, hence need for a layer of abstraction to keep code clean
- Instead of creating many if statemens factory that will dynamically create components based on the payload
- Adding new types of objects to the application simplified (add component to ObjectFactory and other components will behave correctly automatically)

##### Files: library/common/components/ObjectFactory/index.tsx, modules/Results/index.tsx
