import wallet from "../../../assets/loyalty/wallet/vuesax/linear/vuesax/linear/wallet.svg";
import walletActive from "../../../assets/loyalty/wallet-active/vuesax/linear/vuesax/linear/wallet.svg";
import money from "../../../assets/loyalty/money-recive/vuesax/linear/vuesax/linear/money-recive.svg";
import moneyActive from "../../../assets/loyalty/money-recive-active/vuesax/linear/vuesax/linear/money-recive.svg";
import changes from "../../../assets/loyalty/changes/vuesax/linear/group.svg";
import changesActive from "../../../assets/loyalty/changes-active/vuesax/linear/vuesax/linear/group.svg";
import Topup from "../ui/topup";
import Profit from "../ui/profit";
import Transactions from "../ui/transactions";

export const loyaltyTabs = [
  {
    id: 1,
    title: "تحويل إلى رصيد",
    query: "topup",
    icon: wallet,
    active_Icon: walletActive,
    isActive: true,
    component: Topup,
  },
  {
    id: 2,
    title: "مكسبك",
    query: "profit",
    icon: money,
    active_Icon: moneyActive,
    isActive: false,
    component: Profit,
  },
  {
    id: 3,
    title: "تم التحويل",
    query: "transactions",
    icon: changes,
    active_Icon: changesActive,
    isActive: false,
    component: Transactions,
  },
];
