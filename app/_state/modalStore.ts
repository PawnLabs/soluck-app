import create from "zustand";

type ModalNames =
  | "leaderboardModal"
  | "profileModal"
  | "tasksModal"
  | "depositModal"
  | "withdrawModal"
  | "walletModal";

type ModalState = {
  modals: Record<ModalNames, boolean>;
  openModal: (modalName: ModalNames) => void;
  closeModal: () => void;
};

const useModalStore = create<ModalState>((set) => ({
  modals: {
    leaderboardModal: false,
    profileModal: false,
    tasksModal: false,
    depositModal: false,
    withdrawModal: false,
    walletModal: false,
  },
  openModal: (modalName) =>
    set(() => ({
      modals: {
        leaderboardModal: false,
        profileModal: false,
        tasksModal: false,
        depositModal: false,
        withdrawModal: false,
        walletModal: false,
        [modalName]: true,
      },
    })),
  closeModal: () =>
    set(() => ({
      modals: {
        leaderboardModal: false,
        profileModal: false,
        tasksModal: false,
        depositModal: false,
        withdrawModal: false,
        walletModal: false,
      },
    })),
}));

export default useModalStore;
