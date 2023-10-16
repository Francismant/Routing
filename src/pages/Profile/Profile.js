import { NavLink, Outlet, useParams, useSearchParams } from "react-router-dom";

function Profile() {
  const params = useParams();
  console.log(params);
  const [queryParams, setQueryParams] = useSearchParams();
  console.log(queryParams.get("job"));
  return (
    <div>
      <ul>
        {/* // mettre "end" derrière NavLink si problème sur le changement de couleur sur 2 liens */}
        <NavLink end to="" className={`mr10`}>
          <span>View</span>
        </NavLink>
        <NavLink to="profileData" className={`mr10`}>
          <span>Data</span>
        </NavLink>
      </ul>
      <h1>Profil</h1>
      <Outlet />
    </div>
  );
}

export default Profile;
