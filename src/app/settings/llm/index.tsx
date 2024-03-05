/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import PageTitle from '@/components/PageTitle';

// import Bedrock from './Bedrock';
import Google from './Google';

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */

// import Moonshot from './Moonshot';
// import Ollama from './Ollama';
// import OpenAI from './OpenAI';
// import Perplexity from './Perplexity';
// import Zhipu from './Zhipu';

export default memo<{ showOllama: boolean }>(({ showOllama }) => {
  const { t } = useTranslation('setting');
  return (
    <>
      <PageTitle title={t('tab.llm')} />
      <Google />
    </>
  );
});
