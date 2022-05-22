import {DirectoryItemContainer,Body,BackgroundImage} from "./directory-item.styles";
import {useNavigate} from "react-router-dom";

const DirectoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    const navigate=useNavigate();
    const DItem=()=>{
        navigate(`/shop/${title.replace(/'/g,'').toLowerCase()}`)
    }
    return (
        <DirectoryItemContainer onClick={()=>DItem()}>
            <BackgroundImage imageUrl={imageUrl}/>
            <Body>
                <h2><strong>{title}</strong></h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;