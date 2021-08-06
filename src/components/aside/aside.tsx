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
    },
    {
      title: "Products",
      path: "/Products",
    },
    {
      title: "Users",
      path: "/Users",
    },
    {
      title: "Setting",
      path: "/Setting",
    },
    {
      title: "Login",
      path: "/Login",
    },
  ];

  return (
    <Asideparent>
      <Asideheading>Dashboard</Asideheading>
      <Itemsparen>
        {array.map((arr, index) => {
          return (
            <Items key={index}>
              <Icon />
              <Linkstyle to={arr.path}>{arr.title}</Linkstyle>
            </Items>
          );
        })}
      </Itemsparen>
    </Asideparent>
  );
};
export default Aside;
