import {
  Asideparent,
  Asideheading,
  Itemsparen,
  Items,
  Icon,
  Linkstyle,
} from "./asidestyle";

const Aside = () => {
  const array = [
    {
      title: "Home",
      path: "/",
      icon:"home"
    },
    {
      title: "Products",
      path: "/Products",
      icon:"bag"
    },
    {
      title: "Users",
      path: "/Users",
      icon:"users"
    },
    {
      title: "Setting",
      path: "/Setting",
      icon:"cog"
    },
    {
      title: "Logout",
      path: "/Login",
      icon:"login"
    },
  ];


  return (
    <Asideparent>
      <Asideheading>Dashboard</Asideheading>
      <Itemsparen>
        {array.map((arr, index) => {
          return (
            <Items key={index}>
              <Icon className={`icon-${arr.icon}`}/>
              <Linkstyle to={arr.path}>{arr.title}</Linkstyle>
            </Items>
          );
        })}
      </Itemsparen>
    </Asideparent>
  );
};
export default Aside;

