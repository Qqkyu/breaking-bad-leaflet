# Breaking Bad Leaflet

#### Website which uses _The Breaking Bad API_ (https://breakingbadapi.com/) to display information about Breaking Bad movie series.

## Design patterns

### Proxy:

- Used to simplify and speed up retrieving and accessing data
- Provides simple checks which make sure that there aren't any unnecessary API calls
- Any changes to the inner storage of data don't imply changes to components, only proxy file has to be changed
- Adding new data objects (e.g., character, episode) is easily done in proxy class

##### Files: main/api
