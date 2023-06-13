import propTypes from "prop-types"

export const ViewTable = ({ transactions }) => {
    
    return (
        <table className="w-full text-sm text-center text-gray-500">
            <thead>
            <tr>
                <th scope="col">Date</th>
                <th scope="col">Description</th>
                <th scope="col">Category</th>
                <th scope="col">Amount</th>

                </tr>
            </thead>
            <tbody>
                {/* mapping transactions in the table  */}
                {transactions.map(transaction => (
                    <tr key={transaction.id} className="bg-gray-200 border ">
                        <td>{transaction.date}</td>
                        <td>{transaction.description}</td>
                        <td>{transaction.category}</td>
                        <td>{transaction.amount}</td>
                    </tr>
                ))
                }
                
            </tbody>
        </table>
    )
}

ViewTable.propTypes = {
    transactions: propTypes.array
}