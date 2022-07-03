const Isunseen = ({isUnseen}) => {
    
    return (
        <span className="inedit">{isUnseen === true && <span>. Inédit</span>}</span>
    );
};

export default Isunseen;
