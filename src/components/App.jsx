import Profile from './profile/profile';
import avatar from '../avatar.jpg';
import Statistics from './statistics/statistics';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
        gridGap: '20px',
      }}
    >
      <Profile
        username="Pustelnyk Nataliya"
        tag="@pnataliya"
        location="Forli, Italy"
        avatar={avatar}
        stats={{
          followers: 1_000_000,
          views: 800_000,
          likes: 500_500,
        }}
      />

      <Statistics
        title="Upload stats"
        stats={{
          docx: 32,
          pdf: 4,
          mp3: 17,
          mp4: 47,
        }}
      />
    </div>
  );
};
