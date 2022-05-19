import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <div>May 2022, 20</div>
      <div className="expense-item__description">
        <h2>Food</h2>
        <div className="expense-item__price">500</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
