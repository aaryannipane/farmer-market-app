import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

export const Products = () => {

    const [sheetOpen, setSheetOpen] = useState(false);
    const [alertDialogOpen, setAlertDialogOpen] = useState(false);
    // const [productImage, setProductImage] = useState<String>("");
    const [file, setFile] = useState<File | null>(null);

    // const uploadHandler = (event: any) => {

    //     const file = event.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onload = () => {
    //             if (typeof reader.result === 'string') {
    //                 setProductImage(reader.result);
    //             }
    //         };

    //         reader.readAsDataURL(file);
    //     }


    // }
    return (
        <>
            <div className="container">

                <h1 className=" my-5 text-xl font-semibold uppercase">Ditributor products Page</h1>

                <div className="total-product-count  my-10">
                    <div className="box1 w-[20rem] border-solid border border-teal-500 text-center">
                        <div className='font-semibold bg-teal-500 text-3xl p-2'>Total Products</div>
                        <div className='h-32 text-3xl flex items-center justify-center'><span>20</span></div>
                    </div>
                </div>

                {/* add new product */}
                {/* alert dialog */}


                <Sheet open={sheetOpen} onOpenChange={() => {
                    console.log("open dialog for confirmation", sheetOpen);
                    if (sheetOpen) {

                        // if seet open and clicked on add product btn don't show dialog box

                        console.log("open dialog for confirmation");
                        setAlertDialogOpen(true)
                        // setSheetOpen(!sheetOpen)
                    } else {
                        setSheetOpen(!sheetOpen)
                    }
                }}>
                    <SheetTrigger asChild><Button className="bg-green-300 text-black hover:bg-green-400 mb-2">
                        <PlusCircle className="mr-1 text-black" />
                        Add Product</Button></SheetTrigger>
                    <SheetContent className="w-[500px]  overflow-auto" >
                        <SheetHeader>
                            <SheetTitle>Add a New Product</SheetTitle>
                            <SheetDescription >
                                Fill all the required fields to complete this step.

                            </SheetDescription>
                        </SheetHeader>
                        <div className="grid py-5 gap-4">
                            {/* image upload */}
                            <p>Upload Product Image<span className="text-red-500 font-bold">*</span></p>
                            {(file) ?
                                (<div className="border-2 border-slate-500 overflow-hidden aspect-square w-full border-dashed  object-cover rounded-md relative">
                                    <img src={URL.createObjectURL(file)} className="h-full w-full object-cover" />
                                    <Button variant={"destructive"} className="w-full absolute bottom-0" onClick={() => setFile(null)}>Remove Image</Button>
                                </div>) :
                                (<div className="border-2 border-slate-500 overflow-hidden aspect-square w-full border-dashed  object-cover rounded-md ">
                                    <div className="h-full">
                                        <label htmlFor="file" className="w-full h-full flex justify-center items-center flex-col cursor-pointer">
                                            <PlusCircle size={150} className="text-slate-500" strokeWidth={1} />
                                            <p>Upload Product Image of aspect ratio: 1/1</p>
                                        </label>
                                        <input type="file" id="file" onChange={(e) => {
                                            if (e.target.files) {
                                                setFile(e.target.files[0])
                                            }
                                        }} className="hidden" accept=".png, .jpg, .jpeg" required />
                                    </div>
                                </div>)}


                            <div className="grid grid-cols-4 items-center gap-2">
                                <label htmlFor="name" className="col-span-4">Name<span className="text-red-500 font-bold">*</span></label>
                                <Input id="name" className="col-span-4 border-slate-500" required />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-2">
                                <label htmlFor="description" className="col-span-4">Description<span className="text-red-500 font-bold">*</span></label>
                                <Textarea id="description" className="col-span-4 border-slate-500" placeholder="Write a small description" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-2">
                                <label htmlFor="category" className="col-span-4">Category<span className="text-red-500 font-bold">*</span></label>
                                <Select required>
                                    <SelectTrigger className="col-span-4 border-slate-500">
                                        <SelectValue placeholder="Select a category" />
                                    </SelectTrigger>
                                    <SelectContent>

                                        <SelectItem value="fert">Fertilizer</SelectItem>
                                        <SelectItem value="seeds">Seeds</SelectItem>
                                        <SelectItem value="cattle">Cattle</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="grid grid-cols-4 items-center gap-2">
                                <label htmlFor="mrp" className="col-span-4">MRP(₹‎)<span className="text-red-500 font-bold">*</span></label>
                                <Input id="mrp" type="text" className="col-span-4 border-slate-500" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-2">
                                <label htmlFor="sellingPrice" className="col-span-4">Selling Price(₹‎)<span className="text-red-500 font-bold">*</span></label>
                                <Input id="sellingPrice" type="text" className="col-span-4 border-slate-500" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-2">
                                <label htmlFor="quantity" className="col-span-4">Quantity<span className="text-red-500 font-bold">*</span></label>
                                <Input type="text" id="quantity" className="col-span-4 border-slate-500" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-2">
                                <label htmlFor="active" className="col-span-4">Active<span className="text-red-500 font-bold">*</span></label>
                                <Select defaultValue="yes">
                                    <SelectTrigger className="col-span-4 border-slate-500">
                                        <SelectValue placeholder="Is product active for sell?" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="yes">Yes <span className="text-sm text-gray-500">(default)</span></SelectItem>
                                        <SelectItem value="no">No</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                        </div>
                        <SheetFooter>
                            <Button className="bg-green-600 hover:bg-green-700" onClick={() => {
                                toast.promise(new Promise((resolve, reject) => {
                                    setTimeout(resolve, 2000)
                                }), {
                                    loading: "Loading...",
                                    success: (data) => {
                                        // unset all data   
                                        setSheetOpen(false)
                                        return "toast success"
                                    },
                                    error: "Error",
                                    position: "bottom-center"
                                })
                            }}>Add Product</Button>
                        </SheetFooter>
                    </SheetContent>
                    <AlertDialog open={alertDialogOpen} onOpenChange={(data) => {
                        console.log(data);
                        setAlertDialogOpen(!alertDialogOpen)

                    }}>
                        {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={() => setSheetOpen(false)}>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </Sheet>

                {/* list of products */}
                <div className="products-list ">
                    <Table>
                        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                        <TableHeader className="bg-slate-100">
                            <TableRow>
                                <TableHead className="w-[100px]">Product ID</TableHead>
                                <TableHead>Product Name</TableHead>
                                <TableHead className="w-[100px]">Quantity</TableHead>
                                <TableHead >Address</TableHead>
                                <TableHead className="w-[100px]">Status</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">
                                    sad

                                </TableCell>
                                <TableCell>asd</TableCell>
                                <TableCell>asd</TableCell>
                                <TableCell>asd</TableCell>
                                <TableCell>
                                    asd

                                </TableCell>
                                <TableCell className="text-right">₹asd</TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </div>


            </div>
        </>
    )
}
