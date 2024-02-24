import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export const ProductDetail = () => {
    const productProperties = {
        category: "Fertilizer",
        color: "green",
        material: "plastic"
    }
    const showStarRating = (count: number) => {
        let stars = [
            <Star fill="#FFA41C" color="#F79A20" />,
            <Star fill="#FFA41C" color="#F79A20" />,
            <Star fill="#FFA41C" color="#F79A20" />,
            <Star fill="#FFA41C" color="#F79A20" />,
            <Star fill="#FFA41C" color="#F79A20" />,
            <Star color="#F79A20" />,
            <Star color="#F79A20" />,
            <Star color="#F79A20" />,
            <Star color="#F79A20" />,
            <Star color="#F79A20" />,
        ];
        return stars.slice(5 - count, 10 - count);
    };

    const getProperties = (properties: any) => {
        return Object.keys(properties).map((k, i) => {
            return (
                <tr key={i}>
                    <td className="p-1 pl-0 font-medium">{k}</td>
                    <td className="p-1">{properties[k]}</td>
                </tr>)
        })
    }
    getProperties(productProperties)
    return (
        <div className="container ">
            <div className="flex flex-row gap-3 my-5">
                <div className="left basis-2/6 border bg-slate-50 p-5 rounded">
                    <div className="image">
                        <img
                            src="https://i.pinimg.com/originals/94/47/bc/9447bc8e45434405e7b2e0bf38c545d7.jpg"
                            // src="https://bytutorial.com/assets/listingimages/544/8876_table-cellpadding-cellspacing.jpg"
                            alt=""
                            className="aspect-square object-contain"
                        />
                    </div>
                    <div className="buttons flex flex-row gap-2">
                        <Button className="basis-1/2 bg-yellow-400 hover:bg-yellow-500 text-black">
                            Add to Cart
                        </Button>
                        <Button className="basis-1/2 bg-brandRed hover:bg-brandRed">
                            Buy Now
                        </Button>
                    </div>
                </div>
                <div className="right basis-4/6 border bg-slate-50 p-5 flex flex-col gap-1 rounded">
                    <h1 className="text-lg font-bold">
                        PAD CORP Supreme Duo 2 in1 Manual Battery Operated Sprayer Pump
                        12Volt x 8Amp with 16LTank Capacity 1.7Amp
                    </h1>
                    <p>
                        <span className="font-medium">Brand</span> : ABC brand
                    </p>
                    <div className="ratings flex gap-1">
                        <p>4.2</p>
                        <div className="stars flex">{showStarRating(4)}</div>
                    </div>
                    <div className="font-medium text-2xl gap-1 flex">
                        <span className="font-normal">₹‎</span>
                        1200
                    </div>

                    <div className="stock font-medium">
                        <p className="text-green-500 uppercase">In Stock</p>
                        <p className="text-red-500 uppercase">Out of Stock</p>
                    </div>

                    <div className="properties">
                        <table>
                            <tbody>
                                {getProperties(productProperties)}
                            </tbody>
                        </table>
                    </div>

                    <div className="description">
                        <p className="font-medium">Description:</p>
                        <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, placeat corporis est voluptates dolore id voluptatem omnis atque, earum laborum eligendi maiores corrupti culpa esse harum neque similique delectus architecto tempore, laboriosam accusamus officiis! Similique dolore aspernatur assumenda libero nam dicta numquam id mollitia molestiae aperiam quia temporibus eligendi soluta a, blanditiis cumque modi earum perferendis doloremque esse magni corporis. Repudiandae, sapiente accusamus? Ducimus impedit fugit perspiciatis tempore modi suscipit, quibusdam quos nihil excepturi odit culpa ullam beatae necessitatibus facilis itaque quaerat repellendus maiores eos incidunt praesentium laborum saepe, voluptatum dignissimos? Et hic quidem magni dolorum a animi veniam aliquam.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
