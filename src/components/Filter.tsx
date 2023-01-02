import { cartState } from "../Context";
import Rating from "./Rating";

const Filter = () => {

  const { prodState : { byStock, byRating, byFastDelivery, sort }, prodDispatch } = cartState();

  return (
    <div className="md:w-1/4 bg-gray-600 flex justify-center items-center flex-col gap-5 p-8 rounded-md">
      <h1 className="text-3xl">Filter</h1>
      <p>
        <label htmlFor="ascending">Ascending</label>
        <input type="radio" name="group1" id="ascending" onChange={() => prodDispatch({
          type: "SORT_BY_PRICE",
          payload: "lowToHigh"
        })}
        checked={sort === "lowToHigh" ? true : false}
        />
      </p>
      <p>
        <label htmlFor="Descending">Descending</label>

        <input type="radio" name="group1" id="Descending" onChange={() => prodDispatch({
          type: "SORT_BY_PRICE",
          payload: "highToLow"
        })}
        checked={sort === "highToLow" ? true : false}
         />
      </p>
      <p>
        <label htmlFor="fastdelivery">Fast Delivery</label>
        <input type="checkbox" name="fastDelivery" id="fastdelivery" onChange={() => prodDispatch({
          type: "FILTER_BY_DELIVERY",
        })}
        checked={byFastDelivery}
        />
      </p>
      <p>
        <label htmlFor="instock">Include out of stock</label>
        <input type="checkbox" name="instock" id="instock" onChange={() => prodDispatch({
          type: "FILTER_BY_STOCK",          
        })}
        checked={byStock}
        />
      </p>
      <Rating rate={byRating} click={(i:any) => prodDispatch({
        type: "FILTER_BY_RATING",
        payload: i
      })} />
      <button className="outline-lime-300 border p-2 rounded-lg border-lime-400" onClick={() => prodDispatch({
        type: "CLEAR_FILTERS",
      })} >Clear Filter</button>
    </div>
  );
};

export default Filter;
