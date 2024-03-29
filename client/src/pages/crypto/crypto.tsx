import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import * as CryptoActions from "./../../redux/actions/crypto.actions"
import "./crypto.scss"
import Progress from '../../components/progressbar/progress';

export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [limit, setLimit] = React.useState(10);
    const [currency, setCurrency] = React.useState('btc');
    
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [loader, setLoader] = React.useState(true);

    const handleChangePage = (event: unknown, newPage: number) => {
        setLoader(true)
        setPage(newPage);
        setLoader(false)
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoader(true)
        setRowsPerPage(+event.target.value);
        setPage(0);
        setLoader(false)

    };
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const coinlist: any = useSelector((user: any) => user.crypto)

    useEffect(() => {
        getData()
    }, [])
    async function getData() {
        dispatch(await CryptoActions.getData(currency, page , limit ))
        setLoader(false)
    }
    return (

        <>
            {loader ? <Progress /> : <Paper className='paper'>
                <TableContainer className='table' >
                    <Table >
                        <TableHead>
                            <TableRow>

                                <TableCell
                                    key={"Crypto"}
                                    align={"left"}
                                >
                                    Crypto
                                </TableCell>
                                <TableCell
                                    key={"Current price"}
                                    align={"left"}
                                >
                                    Current price
                                </TableCell>
                                <TableCell
                                    key={"Total volume"}
                                    align={"left"}
                                >
                                    Total volume
                                </TableCell>
                                <TableCell
                                    key={"Range"}
                                    align={"left"}
                                >
                                    Range
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {coinlist?.crypoList?.length && coinlist.crypoList
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row: any) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code} onClick={() => navigate(`/crypto/${row.id}`)}>
                                            {/* {JSON.stringify(row)} */}
                                            <TableCell key={"name"} >
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    flexWrap: 'wrap',

                                                }}>
                                                    <img src={row.image} className="img" />&nbsp;
                                                    <span className='title'>{row.symbol.toUpperCase()}</span>&nbsp;
                                                    <span className='namer'>{row.name}</span>

                                                </div>
                                            </TableCell>
                                            <TableCell key={"current_price"} align={'left'}>
                                                $ {row.current_price.toLocaleString('en-US')}
                                            </TableCell>
                                            <TableCell key={"total_volume"} align={'left'}>
                                                $ {row.total_volume.toLocaleString('en-US')}
                                            </TableCell>
                                            <TableCell key={"high_24h"} align={'left'}>
                                                {row.high_24h.toLocaleString('en-US')}$ - {row.low_24h.toLocaleString('en-US')}$
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={coinlist?.crypoList?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>}
        </>

    );
}
