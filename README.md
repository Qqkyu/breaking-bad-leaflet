# Breaking Bad Leaflet

#### Website which uses _The Breaking Bad API_ (https://breakingbadapi.com/) to display information about Breaking Bad movie series.

## Design patterns

### Proxy:

- Used to simplify and speed up retrieving and accessing data
- Provides simple checks which make sure that there aren't any unnecessary API calls
- Any changes to the inner storage of data don't imply changes to components, only proxy file has to be changed
- Adding new data objects (e.g., character, episode) is easily done in proxy class

##### Files: main/api

### Singleton:

- Api Proxy:
  - Global access provided with react context
  - Ensure that all components work with the same object to provide best performance (caching etc.)
- Redux store:
  - Global access to the main store
  - All of the data which is shown to user stored in a store

##### Files: library/common/contexts/ApiContext.ts, main/store.ts
