import * as React from 'react';
import star from './star.svg';
import { useIntl } from 'react-intl';

export const Main = () => {
  const { formatMessage } = useIntl();
  return (
    <main>
      <h2>
        {formatMessage({
          defaultMessage: 'Resources & Tools',
          description: 'Main: Resources & Tools',
        })}
      </h2>
      <p>
        {formatMessage({
          defaultMessage: 'Thank you for using and showing some ♥ for Nx.',
          description: 'Thanks for sharing',
        })}
      </p>
      <div className="flex github-star-container">
        <a
          href="https://github.com/nrwl/nx"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          {formatMessage(
            {
              defaultMessage: 'If you like Nx, please give it a star: {star}',
              description:
                'Main: If you like Nx, please give it a star: {star}',
            },
            {
              star: (
                <div className="github-star-badge">
                  <img src={star} className="material-icons" alt="" />
                  Star
                </div>
              ),
            }
          )}
        </a>
      </div>
      <p>
        {formatMessage({
          defaultMessage: 'Here are some links to help you get started.Input',
          description:
            'Main: Here are some links to help you get started.Input',
        })}
      </p>
      <ul className="resources">
        <li className="col-span-2">
          <a
            className="resource flex"
            href="https://egghead.io/playlists/scale-react-development-with-nx-4038"
          >
            {formatMessage({
              defaultMessage: 'Scale React Development with Nx (Course)',
              description: 'Main: ',
            })}
          </a>
        </li>
        <li className="col-span-2">
          <a
            className="resource flex"
            href="https://nx.dev/latest/react/tutorial/01-create-application"
          >
            {formatMessage({
              defaultMessage: 'Interactive tutorial',
              description: 'Main: Input',
            })}
          </a>
        </li>
        <li className="col-span-2">
          <a className="resource flex" href="https://nx.app/">
            <svg
              width="36"
              height="36"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M120 15V30C103.44 30 90 43.44 90 60C90 76.56 76.56 90 60 90C43.44 90 30 103.44 30 120H15C6.72 120 0 113.28 0 105V15C0 6.72 6.72 0 15 0H105C113.28 0 120 6.72 120 15Z"
                fill="#0E2039"
              />
              <path
                d="M120 30V105C120 113.28 113.28 120 105 120H30C30 103.44 43.44 90 60 90C76.56 90 90 76.56 90 60C90 43.44 103.44 30 120 30Z"
                fill="white"
              />
            </svg>
            <span className="gutter-left">
              {formatMessage({
                defaultMessage: 'Nx Cloud',
                description: 'Main: ',
              })}
            </span>
          </a>
        </li>
      </ul>
      <h2>
        {formatMessage({ defaultMessage: 'Next Steps', description: 'Main: ' })}
      </h2>
      <p>
        {formatMessage({
          defaultMessage: 'Here are some things you can do with Nx.',
          description: 'Main: Input',
        })}
      </p>
      <details open>
        <summary>
          {formatMessage({
            defaultMessage: 'Add UI library',
            description: 'Main: Input',
          })}
        </summary>
        <pre>{`# Generate UI lib
nx g @nrwl/react:lib ui

# Add a component
nx g @nrwl/react:component xyz --project ui`}</pre>
      </details>
      <details>
        <summary>
          {formatMessage({
            defaultMessage: 'View dependency graph',
            description: 'Main: Input',
          })}
        </summary>
        <pre>{`nx dep-graph`}</pre>
      </details>
      <details>
        <summary>
          {formatMessage({
            defaultMessage: 'Run affected commands',
            description: 'Main: Input',
          })}
        </summary>
        <pre>{`# see what's been affected by changes
nx affected:dep-graph

# run tests for current changes
nx affected:test

# run e2e tests for current changes
nx affected:e2e
  `}</pre>
      </details>
    </main>
  );
};
