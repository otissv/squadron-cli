import { [[[upperCaseName]]]S_ROUTE } from '../route-[[[lowerCaseName]]]';


export default function Delete[[[capitalName]]] (props) {
  const {
    remove[[[capitalName]]]FromList,
    remove[[[capitalName]]],
    redirectTo,
    select[[[capitalName]]],
    selected[[[capitalName]]],
    set[[[capitalName]]],
    storage,
    [[[lowerCaseName]]]sAll
  } = props;

  const { id, token } = storage;

  remove[[[capitalName]]]({ id, token, selected[[[capitalName]]] }).payload
    .then(response => {
      if (!response.data.success) {
        console.log(response);
      }

      remove[[[capitalName]]]FromList([[[lowerCaseName]]]sAll, selected[[[capitalName]]]);
      set[[[capitalName]]]({});
      select[[[capitalName]]](null);
      redirectTo([[[upperCaseName]]]S_ROUTE);
    });
}
