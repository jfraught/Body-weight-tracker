

const StatList = (logs) => {
    if(!logs) {
        return <h1>no logs yet</h1>
    }
return (
    <div>
        {logs}
    </div>
)
};

export default StatList;