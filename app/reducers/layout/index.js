const initialState = {
  join: [{
      title: '이메일',
      placeholder: '영문, 숫자조합',
      type: 'email',
      contentType: 'emailAddress'
    },
    {
      title: '비밀번호',
      placeholder: '영문, 숫자 조합 8자리 이상',
      type: 'password',
      contentType: 'password'
    },
    {
      title: '비밀번호 재입력',
      placeholder: '영문, 숫자 조합 8자리 이상',
      type: 'passwordconfirm',
      contentType: 'password'
    },
    {
      title: '이름',
      placeholder: '이름을 입력해주세요',
      type: 'name',
      contentType: 'name'
    },
  ],
  babyinfo: [{
      title: '아기 이름',
      placeholder: '아이의 이름을 입력해주세요'
    },
    {
      title: '생년월일',
      placeholder: 'YY-MM-DD'
    }
  ]
};

const layouts = (state = initialState, {
  type,
  payload
}) => {
  switch (type) {
    default:
      return state;
  }
};
export default layouts;