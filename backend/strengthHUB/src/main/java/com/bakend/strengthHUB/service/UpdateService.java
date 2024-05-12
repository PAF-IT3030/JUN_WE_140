package com.bakend.strengthHUB.service;

import com.bakend.strengthHUB.entity.Update;

import java.util.List;

public interface UpdateService {
    Update createNewUpdate(Update update);
    void deleteUpdate(Integer updateId);
    Update findUpdateById(Integer updateId);
    List<Update> findAllUpdates();
    Update updateUpdateById(Integer userId, int updateId);
}

