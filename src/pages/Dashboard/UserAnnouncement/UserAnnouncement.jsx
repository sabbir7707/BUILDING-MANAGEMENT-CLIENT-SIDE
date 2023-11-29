import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";

import useAxiosPublic from "../../../hooks/useAxiosPublic";
import UserAnnouncementShow from "./UserAnnouncementShow";


const UserAnnouncement = () => {

    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const { data: announcement = [], isPending: loading, refetch } = useQuery({
        queryKey: ['announcement'],
        queryFn: async () => {
            const res = await axiosPublic.get('/announcement');
            return res.data;
        }
    })
    console.log(announcement);

    return (
        <div>
            <div className=" grid  grid-cols-1 gap-y-8">
                <SectionTitle heading="Announcement" subHeading="Admin Announcement" ></SectionTitle>
                {
                    announcement.map(item => <UserAnnouncementShow key={item._id}
                        item={item}
                    >

                    </UserAnnouncementShow>)
                }
            </div>
        </div>
    );
};

export default UserAnnouncement;