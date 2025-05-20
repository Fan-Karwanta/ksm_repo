import { Models } from "appwrite";
import { Link } from "react-router-dom";

import { Button } from "../ui/button";
import { useUserContext } from "@/context/AuthContext";

type UserCardProps = {
  user: Models.Document;
};

const UserCard = ({ user }: UserCardProps) => {
  // Get current logged-in user from context
  const { user: currentUser } = useUserContext();
  
  // Check if the displayed user is the same as the current logged-in user
  const isCurrentUser = currentUser.id === user.$id;
  
  return (
    <Link to={`/profile/${user.$id}`} className="user-card">
      <img
        src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
        alt="creator"
        className="rounded-full w-14 h-14"
      />

      <div className="flex-center flex-col gap-1">
        <p className="base-medium text-light-1 text-center line-clamp-1">
          {user.name}
        </p>
        <p className="small-regular text-light-3 text-center line-clamp-1">
          @{user.username}
        </p>
      </div>

      {isCurrentUser ? (
        <Button type="button" size="sm" className="shad-button_secondary px-5" disabled>
          You
        </Button>
      ) : (
        
        <Button type="button" size="sm" className="shad-button_primary px-5">
          View Profile
        </Button>
      )}
    </Link>
  );
};

export default UserCard;
