import { useEffect, useState } from "react";
import { fetchFromClist } from "../api/clist";

const AccountList = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetchFromClist("/account/").then(data => setAccounts(data.objects));
    console.log(accounts)
  }, []);

  return (
    <div>
      <h2>Accounts</h2>
      {accounts.map(account => (
        <div key={account.id}>
          <p><strong>ID:</strong> {account.id}</p>
          <p><strong>Username:</strong> {account.username}</p>
        </div>
      ))}
    </div>
  );
};

export default AccountList;
