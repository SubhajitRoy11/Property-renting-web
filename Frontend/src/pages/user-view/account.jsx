


import accImg from "../../assets/wal2.jpg"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


import Booking from "@/components/user-view/booking";

export default function UserAccount(){
    return <div className="flex flex-col">
        <div className="relative h-[300px] w-full overflow-hidden">
            <img
            src={accImg}
            className="h-full w-full object-cover object-center"
            />
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-8 py-8">
        <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
          <Tabs defaultValue="orders">
            <TabsList>
              <TabsTrigger value="booking">Booking</TabsTrigger>
              {/* <TabsTrigger value="profile">Profile</TabsTrigger> */}
            </TabsList>
            <TabsContent value="booking">
              <Booking />
            </TabsContent>
            {/* <TabsContent value="profile">
              <Address />
            </TabsContent> */}
          </Tabs>
        </div>
      </div>
    </div>;
}