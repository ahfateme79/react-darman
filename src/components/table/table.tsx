import {
  Tablestyle,
  Thead,
  Trow,
  Thcolumn,
  Tbody,
  Tbcolumn,
} from "./tablestyle";

interface Tableprops {
  data: any[] | undefined;
  head: string[];
}

const Table: React.FC<Tableprops> = ({ data, head }) => {
  return (
    <Tablestyle>
      <Thead>
        <Trow>
          {head.map((n) => {
            return <Thcolumn key={n}>{n}</Thcolumn>;
          })}
        </Trow>
      </Thead>
          <Tbody>

      {data?.map((n) => {
        return (
            <Trow>
              {head.map((a) => {
                return <Tbcolumn>{n[a]}</Tbcolumn>;
              })}
            </Trow>
        );
      })}
                </Tbody>

    </Tablestyle>
  );
};
export default Table;
