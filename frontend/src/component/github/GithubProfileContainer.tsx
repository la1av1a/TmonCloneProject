import GithubProfile, { GithubProfileProps } from "./GithubProfile";
import { FormEvent, useState, ChangeEvent } from 'react';
import { useSelector } from "react-redux";
import { githubProfileSelector } from "redux/github";
import { getUserProfileThunk } from "redux/github/thunk";
import { useThunk } from "redux/common";


const GithubProfileContainer = (): JSX.Element => {
    const [input, setInput] = useState('');

    const profileData = useSelector(githubProfileSelector);
    const getProfile = useThunk(getUserProfileThunk);
  
    const onSubmitUsername = (username: string) => {
        getProfile(username); // need to convert type casting
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
  