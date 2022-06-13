import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/241381208_1312331742556319_4747624962609090885_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pwvHSGfG_GsAX9VkVhN&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT_qi66J1wBbAcSEqIZ5eR05OogPPbBs2-YtVbUH_hjKkw&oe=62A86C76"
        alt="Account"
      />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <h4>
            Tonny Nguyen
            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
          </h4>
        </p>
        <span className={cx('username')}>tonnynguyen</span>
      </div>
    </div>
  );
}

export default AccountItem;
