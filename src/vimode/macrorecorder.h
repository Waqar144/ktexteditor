/*
    SPDX-FileCopyrightText: KDE Developers

    SPDX-License-Identifier: LGPL-2.0-or-later
*/

#ifndef KATEVI_MACRORECORDER_H
#define KATEVI_MACRORECORDER_H

#include <QChar>
#include <QKeyEvent>
#include <QList>

namespace KateVi
{
class InputModeManager;

class MacroRecorder
{
public:
    explicit MacroRecorder(InputModeManager *viInputModeManager);
    ~MacroRecorder();

    void start(const QChar &macroRegister);
    void stop();

    bool isRecording() const;

    void record(const QKeyEvent &event);
    void dropLast();

    void replay(const QChar &macroRegister);
    bool isReplaying();

private:
    InputModeManager *m_viInputModeManager;

    bool m_isRecording;
    QChar m_register;
    QList<QKeyEvent> m_eventsLog;

    int m_macrosBeingReplayedCount;
    QChar m_lastPlayedMacroRegister;
};
}

#endif // KATEVI_MACRORECORDER_H
