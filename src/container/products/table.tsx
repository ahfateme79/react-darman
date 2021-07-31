import { Table, RowTable, CulmnTableHead, CulmnTable, Loading } from './tablestyle'



interface TableProps {
    data: any[] | undefined
    heading: string[]
    btns: { title: string; color: string; rout: string }[]
}

const TablePanel: React.FC<TableProps> = ({ data, heading, btns }) => {

    return data ?
        (<Table>
            <RowTable>

                {
                    heading?.map(f => {
                        return (
                            <CulmnTableHead>{f}</CulmnTableHead>

                        )
                    })}
            </RowTable>
            {
                data?.map(row => {
                    return (
                        <RowTable>
                            {
                                heading.map(n => {
                                    return (
                                        <CulmnTable>{row[n]}</CulmnTable>
                                    )
                                })
                            }
                            {
                                btns.map(n => {
                                    return (
                                        <CulmnTable><button color={n.color}>{n.title}</button></CulmnTable>
                                    )
                                })
                            }
                        </RowTable>
                    )
                })
            }
        </Table>) : (<Loading />)
}


export default TablePanel;