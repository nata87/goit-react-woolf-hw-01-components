import Profile from "./profile/profile";
import avatar from "../avatar.jpg"

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      
      <Profile
        username="Pustelnyk Nataliya"
        tag="@pnataliya"
        location= "Forli, Italy"
        avatar={avatar}
        stats={{
          followers: 1_000_000,
          views: 800_000,
          likes: 500_500,
        }}
      />

    </div>
  );
};
