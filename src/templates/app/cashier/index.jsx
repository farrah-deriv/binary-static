import React from 'react';
import { Button } from '../../_common/components/elements.jsx';
import { SeparatorLine } from '../../_common/components/separator_line.jsx';

const IconWithLink = ({ button_id, button_link, img_id, img_src }) => (
    <div className='gr-2 gr-4-m'>
        { button_link ?
            <a href={button_link} id={button_id}>
                <img className='responsive' id={img_id} src={img_src} />
            </a>
            :
            <img className='responsive' id={img_id} src={img_src} />
        }
    </div>
);

const DepositWithdrawButtonRealMoney = ({ is_virtual }) => (
    <div className={is_virtual ? 'gr-4 gr-12-m' : 'gr-2 gr-12-m'}>
        <SeparatorLine className='gr-parent gr-hide gr-show-m gr-padding-10' invisible />
        <div className='gr-row gr-row-align-left gr-row-align-right-m'>
            {is_virtual ?
                <div className='gr-adapt'>
                    <Button className='toggle button' id='VRT_topup_link' text={it.L('Reset my demo balance')} />
                </div>
                :
                <React.Fragment>
                    <div className='gr-adapt gr-no-gutter-m client_real client_virtual invisible gr-parent'>
                        <Button
                            className='toggle button client_real client_virtual invisible deposit_btn_cashier'
                            id='fiat_deposit_link'
                            href='javasript:;'
                            text={it.L('Deposit')}
                            text_className='deposit'
                        />
                    </div>
                    <div className='gr-adapt client_real client_virtual invisible'>
                        <Button
                            id='fiat_withdraw_link'
                            className='toggle button client_real client_virtual invisible withdraw_btn_cashier'
                            href={it.url_for('/cashier/forwardws?action=withdraw')}
                            text={it.L('Withdraw')}
                            text_className='withdraw'
                        />
                    </div>
                </React.Fragment>
            }
        </div>
    </div>
);

const DepositWithdrawButtonCryptocurrencies = ({ is_cryptocurrencies_method }) => (
    <div className='gr-2 gr-12-m'>
        <SeparatorLine className='gr-parent gr-hide gr-show-m gr-padding-10' invisible />
        <div className='gr-row gr-row-align-left gr-row-align-right-m'>
            <React.Fragment>
                <div className='gr-adapt gr-no-gutter-m client_real client_virtual invisible gr-parent'>
                    <Button
                        className='toggle button client_real client_virtual invisible deposit_btn_cashier'
                        id={is_cryptocurrencies_method ? 'crypto_deposit_link' : 'payment_agent_deposit_link'}
                        href='javasript:;'
                        text={it.L('Deposit')}
                        text_className='deposit'
                    />
                </div>
                <div className='gr-adapt client_real client_virtual invisible'>
                    <Button
                        className='toggle button client_real client_virtual invisible withdraw_btn_cashier'
                        id={is_cryptocurrencies_method ? 'crypto_withdraw_link' : 'payment_agent_withdraw_link'}
                        href={is_cryptocurrencies_method ? it.url_for('/cashier/forwardws?action=withdraw') : it.url_for('/paymentagent/withdrawws')}
                        text={it.L('Withdraw')}
                        text_className='withdraw'
                    />
                </div>
            </React.Fragment>
        </div>
    </div>
);

export const CashierNote = ({ text, className }) => (
    <div className={`gr-padding-10 invisible cashier_note ${className || ''}`}>
        <div className='gr-12 color-dark-white'>
            <div className='gr-row'>
                <div className='gr-adapt gr-1-m gr-no-gutter-left'>
                    <div className='notice-circle faded margin-top-3'>i</div>
                </div>
                <div className='gr-11 gr-9-t gr-9-p gr-11-m gr-no-gutter align-start'>
                    <p className='no-margin'>
                        {text}
                    </p>
                </div>
            </div>
        </div>
    </div>
);

const Cashier = () => (
    <React.Fragment>
        <h1>{it.L('Cashier')}</h1>

        <div className='invisible' id='message_cashier_unavailable'>
            <p className='notice-msg center-text'>{it.L('Sorry, this feature is not available in your jurisdiction.')}</p>
        </div>

        <div className='invisible' id='account_currency'>
            <img id='account_currency_img' alt='Currency Icon' />
            <div>
                <h2 className='no-margin' id='account_currency_current' />
                <p id='account_currency_hint' />
            </div>
        </div>

        <div className='gr-padding-10 table-body client_virtual invisible gr-parent'>
            <h3 className='gr-padding-10'>{it.L('Reset your demo balance')}</h3>
            <div className='gr-row'>
                <IconWithLink img_id='virtual_money_icon' img_src={it.url_for('images/pages/cashier/virtual_topup.svg')} />
                <div className='gr-6 gr-8-m'>
                    <span id={'virtual_topup_info'} />
                </div>
                <DepositWithdrawButtonRealMoney is_virtual />
            </div>
        </div>

        <SeparatorLine className='gr-padding-10 client_virtual invisible' />

        <div className='gr-padding-10 table-body normal_currency'>
            <h3 className='gr-padding-10'>
                <span className='client_virtual'>{it.L('Deposit via bank wire, credit card, and e-wallet')}</span>
            </h3>
            <div className='gr-row'>
                <IconWithLink
                    button_link={it.url_for('cashier/forwardws?action=deposit')}
                    button_id='payment_methods'
                    img_id='payment_methods_icon'
                    img_src={it.url_for('images/pages/cashier/payment-methods.svg')}
                />
                <div className='gr-6 gr-8-m'>
                    <span className='client_virtual'>{it.L('Deposit via bank wire, credit card, and e-wallet.')}</span>
                    &nbsp;
                    <a className='client_virtual' href={`${it.url_for('cashier/payment_methods')}`} id='view_payment_methods'>
                        <span>{it.L('View available payment methods')}</span>
                    </a>
                    <CashierNote className='gr-hide-m gr-child' text={it.L('Please do not share your bank account, credit card, or e-wallet with another client, as this may cause delays in your withdrawals.')} />
                </div>
                <CashierNote className='gr-12 gr-hide gr-show-m gr-child' text={it.L('Please do not share your bank account, credit card, or e-wallet with another client, as this may cause delays in your withdrawals.')} />
                <DepositWithdrawButtonRealMoney />
            </div>
        </div>

        <div className='gr-padding-10 table-body invisible crypto_currency'>
            <h3 className='gr-padding-10'>
                {it.L('Deposit cryptocurrencies')}
            </h3>
            <div className='gr-row'>
                <IconWithLink
                    img_src={it.url_for('images/pages/cashier/cryptocurrencies.svg')}
                />
                <div className='gr-6 gr-8-m'>
                    <span >{it.L('We accept the following cryptocurrencies:')}</span>
                &nbsp;
                    <div className='crypto_container'>
                        <img  className='crypto_icon' src={it.url_for('images/pages/cashier/bitcoin-icon.svg')} alt='bitcoin-icon_logo' />
                        <img  className='crypto_icon' src={it.url_for('images/pages/cashier/ethereum-icon.svg')} alt='ethereum-icon_logo' />
                        <img  className='crypto_icon' src={it.url_for('images/pages/cashier/litecoin-icon.svg')} alt='litecoin-icon_logo' />
                        <img  className='crypto_icon' src={it.url_for('images/pages/cashier/usdc-icon.svg')} alt='usdc-icon_logo' />
                        <img  src={it.url_for('images/pages/cashier/usdt-tether-icon.svg')} alt='usdt-tether_logo' />
                    </div>
                </div>
                <DepositWithdrawButtonCryptocurrencies is_cryptocurrencies_method />
            </div>
        </div>

        <div className='gr-padding-10' />

        <div className='gr-padding-10 table-body invisible payment-agent' id='payment-agent-section'>
            <h3 className='gr-padding-10'>
                {it.L('Deposit via payment agents')}
            </h3>
            <div className='gr-row'>
                <IconWithLink
                    button_link={it.url_for('cashier/payment_agent_listws')}
                    button_id='payment_agent'
                    img_id='payment_agent_icon'
                    img_src={it.url_for('images/pages/cashier/payment-agents.svg')}
                />
                <div className='gr-6 gr-8-m'>
                    <span>{it.L('Deposit in your local currency via an authorised, independent payment agent in your country.')}</span>
                    <CashierNote className='gr-hide-m gr-child' text={it.L('Withdrawal via payment agent is available only if you deposit exclusively via payment agent.')} />
                </div>
                <CashierNote className='gr-12 gr-hide gr-show-m gr-child' text={it.L('Withdrawal via payment agent is available only if you deposit exclusively via payment agent.')} />
                <DepositWithdrawButtonCryptocurrencies />
            </div>
        </div>

        <div className='gr-padding-10' />
        <div className='gr-padding-10 table-body invisible gr-parent' id='dp2p_info'>
            <h3 className='gr-padding-10'>{it.L('P2P')}</h3>
            <div className='gr-row'>
                <IconWithLink img_src={it.url_for('images/pages/cashier/dp2p-logo.svg')} />
                <div className='gr-6 gr-8-m'>
                    <span>{it.L('Make a deposit or withdrawal on your account by buying and selling fiat currencies from anywhere in the world.')}</span>
                </div>
                <div className='gr-2 gr-12-m'>
                    <SeparatorLine className='gr-parent gr-hide gr-show-m gr-padding-10' invisible />
                    <div className='gr-row gr-row-align-left gr-row-align-right-m'>
                        <div className='gr-adapt'>
                            <Button
                                className='toggle button'
                                href={`${it.url_for('cashier/dp2p')}#show_dp2p`}
                                text={it.L('Buy or Sell')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
);

export default Cashier;
