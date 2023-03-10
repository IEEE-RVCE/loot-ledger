export enum Role {
  'USER' = 'USER',
  'ADMIN' = 'ADMIN',
  'SUPER_ADMIN' = 'SUPER_ADMIN',
}

export enum UserType {
  'FACULTY' = 'FACULTY',
  'STUDENT' = 'STUDENT',
  'ADMIN' = 'ADMIN',
}

export enum memberPosition {
  'CHAIR' = 'CHAIR',
  'VICE_CHAIR' = 'VICE_CHAIR',
  'SECRETARY' = 'SECRETARY',
  'BRANCH_COUNSELLOR' = 'BRANCH_COUNSELLOR',
  'SOCIETY_COUNSELLOR' = 'SOCIETY_COUNSELLOR',
  'SOCIETY_CHAIR' = 'SOCIETY_CHAIR',
  'SOCIETY_VICE_CHAIR' = 'SOCIETY_VICE_CHAIR',
  'SOCIETY_SECRETARY' = 'SOCIETY_SECRETARY',
  'SOCIETY_TREASURER' = 'SOCIETY_TREASURER',
  'TREASURER' = 'TREASURER',
  'MEMBER' = 'MEMBER',
}

export type SocietyMember = {
  member_position: memberPosition;
  member_tenure_start: Date;
  member_tenure_end: Date;
  user_id: string;
  user_name: string;
  user_phone: string;
  user_type: UserType;
  user_department: string;
  user_isActive: boolean;
  society_id: string;
  society_name: string;
};

// Refer README.md for more details on each field
export enum transactionType {
  'DEBIT' = 'DEBIT',
  'CREDIT' = 'CREDIT',
  'OPENING_BALANCE' = 'OPENING_BALANCE',
  'CLOSING_BALANCE' = 'CLOSING_BALANCE',
  'DEFAULT' = 'DEFAULT',
}

export enum transactionStatus {
  'PENDING' = 'PENDING',
  'APPROVED' = 'APPORVED',
  'REJECTED' = 'REJECTED',
  'DEFAULT' = 'DEFAULT',
}

export enum bufferType {
  'BILL' = 'BILL',
  'REPORT' = 'REPORT',
  'PERMISSION_DOC' = 'PERMISSION_DOC',
  'BUDGET' = 'BUDGET',
  'DEFAULT' = 'DEFAULT',
}
