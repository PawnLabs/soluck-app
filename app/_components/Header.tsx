import Image from "next/image";
import logoSvg from "../icons/logo.svg";
import arrowDownSvg from "../icons/arrowdown.svg";
import arrowUpSvg from "../icons/arrowup.svg";
import profilePic from "../icons/newProfile.svg";
import dartSvg from "../icons/dart.svg";
import trophySvg from "../icons/trophy.svg";
import useModalStore from "../_state/modalStore";
import ProfileModal from "../_modals/profile.modal";
import WalletModal from "../_modals/wallet.modal";
import TasksModal from "../_modals/tasks.modal";
import LeaderboardModal from "../_modals/leaderboard.modal";
import WithdrawModal from "../_modals/withdraw.modal";
import DepositModal from "../_modals/deposit.modal";

export const Header = () => {
  const { modals, openModal, closeModal } = useModalStore();

  return (
    <div className="flex h-full w-full items-center bg-black-main">
      {modals.profileModal && (
        <ProfileModal
          title="Profile"
          description="text"
          onClose={closeModal}
        />
      )}
      {modals.walletModal && (
        <WalletModal
          title="Wallet"
          description="text"
          onClose={closeModal}
        />
      )}
      {modals.tasksModal && (
        <TasksModal
          title="Tasks"
          description="text"
          onClose={closeModal}
        />
      )}
      {modals.leaderboardModal && (
        <LeaderboardModal
          title="Leaderboard"
          description="text"
          onClose={closeModal}
        />
      )}
      {modals.withdrawModal && (
        <WithdrawModal
          title="Tasks"
          description="text"
          onClose={closeModal}
        />
      )}
      {modals.depositModal && (
        <DepositModal
          title="Tasks"
          description="text"
          onClose={closeModal}
        />
      )}
      <Image
        src={logoSvg}
        alt="Logo"
        width={40}
        height={40}
        className="ml-16"
      />
      <div className="ml-auto mr-[64px] flex items-center justify-center">
        <div className="mr-6 flex gap-8 text-white-gray">
          <div
            className="flex cursor-pointer gap-2"
            onClick={() => openModal("leaderboardModal")}
          >
            <Image
              src={trophySvg}
              alt="Logo"
              width={16}
              height={16}
              className=""
            />
            Leaderboard
          </div>
          <div className="flex cursor-pointer gap-2" onClick={() => openModal("tasksModal")}>
            <Image
              src={dartSvg}
              alt="Logo"
              width={16}
              height={16}
              className=" "
            />
            Tasks
          </div>
        </div>
        <div className="flex h-[48px] w-[270px] items-center justify-center gap-6 rounded-xl bg-black">
          <div className="flex gap-2">
            <div className="flex h-[32px] w-[94px] cursor-pointer items-center justify-center rounded-xl bg-yellow-main text-sm font-medium text-black-main" onClick={() => openModal("walletModal")}>
              $ 125.23
            </div>
            <div className="flex h-[32px] w-[40px] cursor-pointer items-center justify-center rounded-xl bg-white/[0.08]" onClick={() => openModal("depositModal")}>
              <Image
                src={arrowDownSvg}
                alt="Arrow Down"
                width={18}
                height={18}
              />
            </div>
            <div className="flex h-[32px] w-[40px] cursor-pointer items-center justify-center rounded-xl bg-white/[0.08]" onClick={() => openModal("withdrawModal")}>
              <Image src={arrowUpSvg} alt="Arrow Down" width={18} height={18} />
            </div>
          </div>

          <div className="flex cursor-pointer items-center justify-center rounded-full bg-white" onClick={() => openModal("profileModal")}>
            <Image
              src={profilePic}
              alt="Arrow Down"
              className="p-1"
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
