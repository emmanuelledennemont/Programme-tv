const Direct = ({ direct }) => {
    
    return (
        <span className="direct">{direct === true && <span>. Direct</span>}</span>
    );
};

export default Direct;
