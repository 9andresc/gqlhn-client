import styled from '@emotion/styled';
import React from 'react';

type ConatinerProps = {
  height: number;
  width: number;
};

const Container = styled.div<ConatinerProps>(props => ({
  position: 'relative',
  height: `${props.height}rem`,
  width: `${props.width}rem`,
}));

const Svg = styled.svg({
  bottom: '0',
  left: '0',
  position: 'absolute',
  right: '0',
  top: '0',
  height: '100%',
  width: '100%',
  fill: 'currentColor',
});

type IconProps = {
  fill?: string;
  size?: number;
  style?: React.CSSProperties;
};

export function ErrorIcon({
  fill = '#F52F57',
  size = 1,
  style = {},
}: IconProps) {
  const height = size;
  const width = height * 1;

  return (
    <Container height={height} style={style} width={width}>
      <Svg
        aria-hidden
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M99.2609 90.1934L55.6423 3.52661C54.5547 1.3599 52.4233 0 50.1035 0H50.0973C47.7776 0 45.6526 1.35332 44.5586 3.52003L0.745169 90.1866C-0.298391 92.2667 -0.241932 94.76 0.889729 96.76C2.02759 98.7666 4.07728 100 6.28394 100H93.7095C95.9226 100 97.9657 98.7732 99.1037 96.76C100.242 94.7534 100.298 92.2602 99.2609 90.1934ZM50.0973 86.6666C46.6269 86.6666 43.8105 83.6799 43.8105 80C43.8105 76.3201 46.6271 73.3335 50.0973 73.3335C53.5614 73.3335 56.3841 76.3201 56.3841 80C56.3841 83.6799 53.5678 86.6666 50.0973 86.6666ZM56.3906 60.1067C56.3906 63.7934 53.5678 66.7732 50.1038 66.7732C46.6333 66.7732 43.817 63.7931 43.817 60.1067V33.4399C43.817 29.7598 46.6335 26.7733 50.1038 26.7733C53.5678 26.7733 56.3906 29.76 56.3906 33.4399V60.1067Z"
          fill={fill}
        />
      </Svg>
    </Container>
  );
}

export function LogoIcon({ size = 1, style = {} }: IconProps) {
  const height = size;
  const width = height * 1;

  return (
    <Container height={height} style={style} width={width}>
      <Svg
        aria-hidden
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100" height="100" fill="#292F36" />
        <path
          d="M23.792 40.992C24.384 40.992 25.064 41.048 25.832 41.16C26.6 41.256 27.304 41.368 27.944 41.496L27.896 43.296C26.088 42.944 24.72 42.768 23.792 42.768C22.688 42.768 21.896 42.992 21.416 43.44C20.952 43.872 20.72 44.6 20.72 45.624V52.584C20.72 53.608 20.952 54.352 21.416 54.816C21.896 55.264 22.688 55.488 23.792 55.488C24.512 55.488 25.448 55.376 26.6 55.152V49.848H23.6V47.928H28.64V56.4C26.72 56.992 25.104 57.288 23.792 57.288C21.952 57.288 20.64 56.896 19.856 56.112C19.072 55.328 18.68 54.104 18.68 52.44V45.84C18.68 44.144 19.08 42.912 19.88 42.144C20.68 41.376 21.984 40.992 23.792 40.992Z"
          fill="#D16F3E"
        />
        <path
          d="M37.2245 40.992C39.0165 40.992 40.3365 41.44 41.1845 42.336C42.0325 43.232 42.4565 44.504 42.4565 46.152V52.128C42.4565 54.176 41.6965 55.608 40.1765 56.424L42.9365 57.144L42.9845 59.04H42.5285L37.8245 57.264C37.7125 57.28 37.5205 57.288 37.2485 57.288C33.7445 57.288 31.9925 55.568 31.9925 52.128V46.152C31.9925 44.504 32.4165 43.232 33.2645 42.336C34.1125 41.44 35.4325 40.992 37.2245 40.992ZM37.2245 42.792C36.1685 42.792 35.3685 43.056 34.8245 43.584C34.2965 44.112 34.0325 44.888 34.0325 45.912V52.344C34.0325 53.368 34.3045 54.152 34.8485 54.696C35.3925 55.224 36.1925 55.488 37.2485 55.488C39.3605 55.488 40.4165 54.424 40.4165 52.296V45.936C40.4165 44.912 40.1445 44.136 39.6005 43.608C39.0725 43.064 38.2805 42.792 37.2245 42.792Z"
          fill="#D16F3E"
        />
        <path
          d="M47.9806 41.28V55.2H54.2206V57H45.9406V41.28H47.9806Z"
          fill="#D16F3E"
        />
        <path
          d="M67.0653 41.28V57H65.0253V49.8H58.7853V57H56.7453V41.28H58.7853V47.976H65.0253V41.28H67.0653Z"
          fill="#D16F3E"
        />
        <path
          d="M77.8672 57L72.6832 43.728V57H70.6672V41.28H73.9312L79.0192 54.552V41.28H81.0352V57H77.8672Z"
          fill="#D16F3E"
        />
      </Svg>
    </Container>
  );
}

export function MoonIcon({ size = 1, style = {} }: IconProps) {
  const height = size;
  const width = height * 1;

  return (
    <Container height={height} style={style} width={width}>
      <Svg
        aria-hidden
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50C100 77.6139 77.6139 100 50 100C22.3861 100 0 77.6139 0 50C0 22.3861 22.3861 0 50 0C77.6139 0 100 22.3861 100 50Z"
          fill="#CCD6DD"
        />
        <path
          d="M36.1111 20.8333C36.1111 26.2028 31.7611 30.5556 26.3889 30.5556C21.0167 30.5556 16.6667 26.2028 16.6667 20.8333C16.6667 15.4639 21.0167 11.1111 26.3889 11.1111C31.7611 11.1111 36.1111 15.4639 36.1111 20.8333Z"
          fill="#B8C5CD"
        />
        <path
          d="M77.7778 79.1667C77.7778 84.5389 73.4278 88.8889 68.0556 88.8889C62.6833 88.8889 58.3333 84.5389 58.3333 79.1667C58.3333 73.7944 62.6833 69.4444 68.0556 69.4444C73.4278 69.4444 77.7778 73.7944 77.7778 79.1667Z"
          fill="#B8C5CD"
        />
        <path
          d="M66.6667 13.8889C66.6667 16.9556 64.1778 19.4444 61.1111 19.4444C58.0444 19.4444 55.5555 16.9556 55.5555 13.8889C55.5555 10.8222 58.0444 8.33333 61.1111 8.33333C64.1778 8.33333 66.6667 10.8222 66.6667 13.8889Z"
          fill="#B8C5CD"
        />
        <path
          d="M5.55554 50C5.55554 51.5361 6.79999 52.7778 8.33332 52.7778C9.86665 52.7778 11.1111 51.5361 11.1111 50C11.1111 48.4667 9.86665 47.2222 8.33332 47.2222C6.79999 47.2222 5.55554 48.4667 5.55554 50Z"
          fill="#B8C5CD"
        />
        <path
          d="M80.5555 25C80.5555 26.5361 81.7972 27.7778 83.3333 27.7778C84.8694 27.7778 86.1111 26.5361 86.1111 25C86.1111 23.4667 84.8694 22.2222 83.3333 22.2222C81.7972 22.2222 80.5555 23.4667 80.5555 25Z"
          fill="#B8C5CD"
        />
        <path
          d="M41.6667 86.1111C41.6667 87.6472 42.9083 88.8889 44.4444 88.8889C45.9805 88.8889 47.2222 87.6472 47.2222 86.1111C47.2222 84.575 45.9805 83.3333 44.4444 83.3333C42.9083 83.3333 41.6667 84.575 41.6667 86.1111Z"
          fill="#B8C5CD"
        />
        <path
          d="M94.4445 52.7778C94.4445 55.8444 91.9556 58.3333 88.8889 58.3333C85.8222 58.3333 83.3333 55.8444 83.3333 52.7778C83.3333 49.7111 85.8222 47.2222 88.8889 47.2222C91.9556 47.2222 94.4445 49.7111 94.4445 52.7778Z"
          fill="#B8C5CD"
        />
        <path
          d="M22.2222 72.2222C22.2222 75.2889 19.7333 77.7778 16.6667 77.7778C13.6 77.7778 11.1111 75.2889 11.1111 72.2222C11.1111 69.1556 13.6 66.6667 16.6667 66.6667C19.7333 66.6667 22.2222 69.1556 22.2222 72.2222Z"
          fill="#B8C5CD"
        />
        <path
          d="M50 69.1786C30.5556 69.1786 25 61.9064 25 65.3425C25 68.7814 36.1111 77.7786 50 77.7786C63.8889 77.7786 75 68.7814 75 65.3425C75 61.9064 69.4444 69.1786 50 69.1786Z"
          fill="#99AAB5"
        />
        <path
          d="M75 41.6667C75 46.2694 71.2667 50 66.6667 50C62.0667 50 58.3333 46.2694 58.3333 41.6667C58.3333 37.0639 62.0667 33.3333 66.6667 33.3333C71.2667 33.3333 75 37.0639 75 41.6667Z"
          fill="#99AAB5"
        />
        <path
          d="M41.6667 41.6667C41.6667 46.2694 37.9333 50 33.3333 50C28.7333 50 25 46.2694 25 41.6667C25 37.0639 28.7333 33.3333 33.3333 33.3333C37.9333 33.3333 41.6667 37.0639 41.6667 41.6667Z"
          fill="#99AAB5"
        />
      </Svg>
    </Container>
  );
}

export function SunIcon({ size = 1, style = {} }: IconProps) {
  const height = size;
  const width = height * 1;

  return (
    <Container height={height} style={style} width={width}>
      <Svg
        aria-hidden
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 100C48.9045 100 47.9073 99.3876 47.4129 98.4129L42.3567 88.4298L33.8624 95.7219C33.3258 96.1742 32.6545 96.4157 31.9747 96.4157C31.6011 96.4157 31.2247 96.3427 30.868 96.1966C29.8595 95.7781 29.1657 94.8258 29.0871 93.7416L28.2331 82.5758L17.5927 86.0618C17.2978 86.1573 16.9944 86.2051 16.691 86.2051C15.9354 86.2051 15.1966 85.9073 14.6404 85.3539C13.8708 84.5871 13.5983 83.441 13.9382 82.4017L17.4213 71.7612L6.26404 70.9157C5.17416 70.8286 4.22472 70.1433 3.80618 69.1376C3.39045 68.1208 3.57303 66.9663 4.28371 66.1376L11.5702 57.6433L1.58989 52.5871C0.61236 52.0927 0 51.0899 0 50C0 48.9101 0.61236 47.9101 1.58989 47.4129L11.5702 42.3567L4.28371 33.8652C3.57584 33.0337 3.39045 31.8764 3.80618 30.868C4.22472 29.8595 5.17416 29.1685 6.26404 29.0871L17.4213 28.2331L13.9382 17.5955C13.5983 16.5562 13.8708 15.4157 14.6404 14.6404C15.1966 14.0899 15.9354 13.7949 16.691 13.7949C16.9944 13.7949 17.2978 13.8427 17.5927 13.9382L28.2331 17.4213L29.0871 6.26404C29.1657 5.17415 29.8595 4.22471 30.868 3.80617C31.2247 3.66011 31.6011 3.58706 31.9747 3.58706C32.6545 3.58706 33.3258 3.82584 33.8624 4.2837L42.3567 11.573L47.4129 1.58988C47.9073 0.615158 48.9045 0 50 0C51.0899 0 52.0927 0.615158 52.5843 1.58707L57.6461 11.573L66.1405 4.2837C66.677 3.82584 67.3511 3.58706 68.0253 3.58706C68.4045 3.58706 68.7781 3.66011 69.1376 3.80617C70.1461 4.22471 70.8315 5.17696 70.9185 6.26404L71.7697 17.4213L82.4017 13.9382C82.6994 13.8427 83.0056 13.7949 83.3034 13.7949C84.0618 13.7949 84.8062 14.0899 85.3539 14.6404C86.1292 15.4157 86.4017 16.5562 86.0618 17.5955L82.5758 28.2331L93.7416 29.0871C94.8258 29.1685 95.7781 29.8595 96.1938 30.868C96.6124 31.8764 96.4298 33.0337 95.7191 33.8652L88.4298 42.3567L98.4101 47.4129C99.3876 47.9101 100 48.9101 100 50C100 51.0899 99.3876 52.0899 98.4101 52.5871L88.4298 57.6433L95.7191 66.1376C96.4298 66.9663 96.6124 68.1208 96.1938 69.1376C95.7781 70.1433 94.8258 70.8286 93.7331 70.9157L82.5758 71.7612L86.0618 82.4017C86.4017 83.4438 86.1292 84.5871 85.3539 85.3539C84.8062 85.9073 84.0618 86.2051 83.3034 86.2051C83.0056 86.2051 82.6994 86.1573 82.4017 86.0618L71.7697 82.5758L70.9185 93.736C70.8315 94.8258 70.1461 95.7781 69.1376 96.1966C68.7781 96.3427 68.4045 96.4157 68.0253 96.4157C67.3511 96.4157 66.677 96.1742 66.1405 95.7219L57.6461 88.4298L52.5843 98.4129C52.0927 99.3876 51.0899 100 50 100Z"
          fill="#F4900C"
        />
        <path
          d="M86.5169 50.002C86.5169 70.1677 70.1657 86.5188 50 86.5188C29.8343 86.5188 13.4832 70.1677 13.4832 50.002C13.4832 29.8335 29.8343 13.4851 50 13.4851C70.1657 13.4851 86.5169 29.8335 86.5169 50.002Z"
          fill="#FFCC4D"
        />
        <path
          d="M50 65.3677C32.5225 65.3677 27.5281 58.8284 27.5281 61.9154C27.5281 65.011 37.5168 73.098 50 73.098C62.4831 73.098 72.4719 65.011 72.4719 61.9154C72.4719 58.8284 67.4803 65.3677 50 65.3677Z"
          fill="#F4900C"
        />
        <path
          d="M72.4719 40.6368C72.4719 44.7744 69.118 48.1283 64.9803 48.1283C60.8455 48.1283 57.4916 44.7744 57.4916 40.6368C57.4916 36.4991 60.8455 33.1452 64.9803 33.1452C69.118 33.1452 72.4719 36.4991 72.4719 40.6368Z"
          fill="#F4900C"
        />
        <path
          d="M42.5098 40.6368C42.5098 44.7744 39.1531 48.1283 35.0183 48.1283C30.8834 48.1283 27.5295 44.7744 27.5295 40.6368C27.5295 36.4991 30.8834 33.1452 35.0183 33.1452C39.1531 33.1452 42.5098 36.4991 42.5098 40.6368Z"
          fill="#F4900C"
        />
      </Svg>
    </Container>
  );
}
