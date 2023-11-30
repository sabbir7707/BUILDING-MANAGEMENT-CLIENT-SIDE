import useAuth from "../../../hooks/useAuth";


const PaymentHistoryShow = ({ item }) => {
    console.log(item.Apartment_no.toString());
     const{ user } =  useAuth ();
     console.log(user);
    /* const myString =payments.Apartment_no.toString()
    console.log( myString); */
    const { Apartment_no,Block_name,FloorNO,email,name,
        rent, transactionId ,status,_id ,date
    } =item

    return (
   
        < article
  className = "hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
        >
        <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">


            <a href="#">
                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                    Email:{email}
                </h3>
                <h3 className="mt-0.5 text-sm font-medium text-gray-900">
                    Name:  {name}
                </h3>
                <h3 className="mt-0.5 text-xs font-medium text-gray-900">
                    Date: {user.metadata.lastSignInTime}
                </h3>
            </a>
            
            <time  className="block text-xs text-gray-500">
            Apartment No:  {Apartment_no.toString()}
            </time>
            <time  className="block text-xs text-gray-500">
             Block Name:  {Block_name.toString()}
            </time>
            <time  className="block text-xs text-gray-500">
             Floor Name:  {FloorNO.toString()}
            </time>

            <div className="mt-4 flex flex-wrap gap-1">
                <span
                    className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                >
                   Rent:$  {rent}
                </span>

                <span
                    className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                >
                   Transaction Id: {transactionId}
                </span>
            </div>
        </div>
</article >
    );
};

export default PaymentHistoryShow;