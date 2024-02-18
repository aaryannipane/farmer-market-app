import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

// dropdown

import { StatusDialog } from "@/components/custom/StatusDialog"






export const Dashboard = () => {



    const orderData = [
        { oid: "OID001", productName: "Pesticide", quantity: 20, address: "plot 36, sai sanskar, sec 02, navi mumbai", status: "Delivered", amount: 1200 },
        { oid: "OID002", productName: "Fertilizer", quantity: 5, address: "plot 36, sai sanskar, sec 02, navi mumbai", status: "New", amount: 500 },
        { oid: "OID003", productName: "Fertilizer", quantity: 5, address: "plot 36, sai sanskar, sec 02, navi mumbai", status: "New", amount: 500 },
        { oid: "OID004", productName: "Fertilizer", quantity: 5, address: "plot 36, sai sanskar, sec 02, navi mumbai", status: "Dispatched", amount: 500 },
        { oid: "OID005", productName: "Fertilizer", quantity: 5, address: "plot 36, sai sanskar, sec 02, navi mumbai", status: "New", amount: 500 },
        { oid: "OID006", productName: "Fertilizer", quantity: 5, address: "plot 36, sai sanskar, sec 02, navi mumbai", status: "Delivered", amount: 500 },
        { oid: "OID007", productName: "Fertilizer", quantity: 5, address: "plot 36, sai sanskar, sec 02, navi mumbai", status: "New", amount: 500 },
    ]

    return (
        <>

            <h1 className="container my-5 text-xl font-semibold uppercase">Ditributor Orders Page</h1>

            {/* orders */}
            <div className="order-statistics container my-10">
                <div className='flex justify-between '>
                    <div className="box1 w-[20rem] border-solid border border-teal-500 text-center">
                        <div className='font-semibold bg-teal-500 text-3xl p-2'>Total Orders</div>
                        <div className='h-32 text-3xl flex items-center justify-center'><span>{orderData.length}</span></div>
                    </div>
                    <div className="box1 w-[20rem] border-solid border border-gray-400 text-center">
                        <div className='font-semibold bg-gray-400 text-3xl p-2'>Dispatched</div>
                        <div className='h-32 text-3xl flex items-center justify-center'><span>{
                            orderData.filter((order => order.status.toLowerCase() === "dispatched")).length
                        }</span></div>
                    </div>
                    <div className="box1 w-[20rem] border-solid border border-green-500 text-center">
                        <div className='font-semibold bg-green-500 text-3xl p-2'>Delivered</div>
                        <div className='h-32 text-3xl flex items-center justify-center'><span>{
                            orderData.filter((order => order.status.toLowerCase() === "delivered")).length
                        }</span></div>
                    </div>
                </div>
            </div>

            {/* orders table */}
            <div className="orders-table container">
                <Table>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader className="bg-slate-100">
                        <TableRow>
                            <TableHead className="w-[100px]">Order ID</TableHead>
                            <TableHead>Product Name</TableHead>
                            <TableHead className="w-[100px]">Quantity</TableHead>
                            <TableHead >Address</TableHead>
                            <TableHead className="w-[100px]">Status</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orderData.map((order) => (
                            <TableRow key={order.oid}>
                                <TableCell className="font-medium">
                                    {order.oid}

                                </TableCell>
                                <TableCell>{order.productName}</TableCell>
                                <TableCell>{order.quantity}</TableCell>
                                <TableCell>{order.address}</TableCell>
                                <TableCell>
                                    <StatusDialog order={order} />
                                </TableCell>
                                <TableCell className="text-right">₹{order.amount}</TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>

            </div>

        </>
    )
}
