import GithubProfile, { GithubProfileProps } from "./GithubProfile";
import { FormEvent, useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { githubProfileSelector } from "redux/github";
import { getUserProfileThunk } from "redux/github/thunk";
const GithubProfileContainer = (): JSX.Element => {
    const data: GithubProfileProps = {
        bio: '',
        blog: '',
        name: 'test',
        thumbnail: '',
    }
    const [input, setInput] = useState('');

    const profileData = useSelector(githubProfileSelector);
    const dispatch = useDispatch();
  
    const onSubmitUsername = (username: string) => {
      dispatch(getUserProfileThunk(username) as any); // need to convert type casting
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitUsername(input);
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };
    return (
        <>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={input} placeholder="Github 계정명을 입력하세요." />
                <button type="submit">조회</button>
            </form>
            { profileData && <GithubProfile name={profileData.name} bio={profileData.bio} blog={profileData.blog} thumbnail={profileData.avatar_url} /> }
        </>
    );
  }
  
  export default GithubProfileContainer;
  