import './GithubProfile.css';

export interface GithubProfileProps {
  name: string;
  thumbnail: string;
  bio: string;
  blog: string;
};

const GithubProfile = (props: GithubProfileProps) => {
  return (
    <div className="GithubProfileInfo">
      <div className="profile-head">
        <img src={props.thumbnail} alt="user thumbnail" />
        <div className="name">{props.name}</div>
      </div>
      <p>{props.bio}</p>
      <div>{props.blog !== '' && <a href={props.blog}>블로그</a>}</div>
    </div>
  );
}

export default GithubProfile;
  