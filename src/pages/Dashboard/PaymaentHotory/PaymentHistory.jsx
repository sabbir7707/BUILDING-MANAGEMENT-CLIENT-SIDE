import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import PaymentHistoryShow from "./PaymentHistoryShow";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })

    
     console.log(payments.floor_no);
     console.log(payments);
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2" >  
           
              {
                    payments.map(item => <PaymentHistoryShow key={item._id}
                        item={item}
                    >

                    </PaymentHistoryShow>)
                }
    
    </div>
    
    );
};

export default PaymentHistory;