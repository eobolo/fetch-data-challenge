import './Header.css';

const Header = ({ handleDivHeaderStylesAndApiCall, clickValue, idValue}) => {
    return (
        <header>
            <div
                className={idValue === "user" ? `header-div ${clickValue}` : `header-div`}
                id='user'
                onClick={(event) => handleDivHeaderStylesAndApiCall(event, "users")}
            >Users
            </div>
            <div
                className={idValue === "post" ? `header-div ${clickValue}` : `header-div`}
                id='post'
                onClick={(event) => handleDivHeaderStylesAndApiCall(event, "posts")}
            >Posts
            </div>
            <div
                className={idValue === "comment" ? `header-div ${clickValue}` : `header-div`}
                id='comment'
                onClick={(event) => handleDivHeaderStylesAndApiCall(event, "comments")}
            >Comments
            </div>
        </header>
    );
}

export default Header