import { Link,useLocation,useNavigate,useSearchParams, } from "react-router-dom";
import { HousePlug, LogOut, Menu,  UserCog } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { useDispatch, useSelector } from "react-redux";
import { userViewHeaderMenuItems} from "@/config";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { logoutUser } from "@/store/auth-slice"
import { useEffect, useState } from "react";



function MenuItems(){
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();

    function handleNavigate(getCurrentMenuItem) {
        sessionStorage.removeItem("filters");
        const currentFilter =
          getCurrentMenuItem.id !== "home" && 
          getCurrentMenuItem.id !== "listing" &&
          getCurrentMenuItem.id !== "contract" &&
          getCurrentMenuItem.id !== "blog" &&
          getCurrentMenuItem.id !== "search"
            ? {
                category: [getCurrentMenuItem.id],
              }
            : null;
    
        sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    
        location.pathname.includes("listing") && currentFilter !== null
          ? setSearchParams(
              new URLSearchParams(`?category=${getCurrentMenuItem.id}`)
            )
          : navigate(getCurrentMenuItem.path);
      }
    
    return <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
        {
            userViewHeaderMenuItems.map((menuItem) => (
                <Label
                  onClick={() => handleNavigate(menuItem)}
                  className="text-sm font-medium cursor-pointer"
                  key={menuItem.id}
                >
                  {menuItem.label}
                </Label>
              ))
        }
    </nav>
}

function HeaderRightContent(){
    const { user } = useSelector((state) => state.auth);
    const [openCartSheet, setOpenCartSheet] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(logoutUser());
    }

   

    return <div className="flex lg:items-center lg:flex-row flex-col gap-4">
        <Sheet open={openCartSheet} onOpenChange={() => setOpenCartSheet(false)}>
            
            
        </Sheet>
        
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className="bg-black">
                    <AvatarFallback className="bg-black text-white font-extrabold cursr-pointer">
                        {user?.userName[0].toUpperCase()}
                       
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" className="w-56">
             <DropdownMenuLabel>Logged in as {user?.userName}</DropdownMenuLabel>
             <DropdownMenuSeparator/>
             <DropdownMenuItem onClick={() => navigate("/user/account")}>
                <UserCog className="mr-2 h-4 w-4" />
                Account
             </DropdownMenuItem>
             <DropdownMenuSeparator />
             <DropdownMenuItem 
             onClick={handleLogout}
             >
                <LogOut className="mr-2 h-4 w-4" />
                    Logout
            </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
}

export default function UserHeader(){
    const { isAuthenticated,user } = useSelector((state) => state.auth);
    console.log(user)

    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="flex h-16 items-center justify-between px-4 md:px-6">
                <Link to="/shop/home" className="flex items-center gap-2">
                    <HousePlug className="h-6 w-6"/>
                    <span className="font-bold">Wonderlust</span>
                </Link>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="lg:hidden">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle header menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-full max-w-xs">
                        <MenuItems />
                        <HeaderRightContent />
                    </SheetContent>
                </Sheet>
                <div className="hidden lg:block">
                    <MenuItems />
                </div>
                
                    <div className="hidden lg:block">
                     <HeaderRightContent />
                    </div>
                        
            </div>
        </header>
    )
}