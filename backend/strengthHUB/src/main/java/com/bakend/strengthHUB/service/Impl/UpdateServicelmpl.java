package com.bakend.strengthHUB.service.Impl;

import com.bakend.strengthHUB.entity.Update;
import com.bakend.strengthHUB.service.UpdateService;
import com.bakend.strengthHUB.repo.UpdateRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UpdateServicelmpl implements UpdateService {

    @Autowired
    private UpdateRepository updateRepository;

    @Override
    public Update createNewUpdate(Update update) {
        return updateRepository.save(update);
    }

    @Override
    public void deleteUpdate(Integer updateId) {
        updateRepository.deleteById(updateId);
    }

    @Override
    public Update findUpdateById(Integer updateId) {
        Optional<Update> optionalUpdate = updateRepository.findById(updateId);
        return optionalUpdate.orElse(null);
    }

    @Override
    public List<Update> findAllUpdates() {
        return updateRepository.findAll();
    }

    @Override
    public Update updateUpdateById(Integer userId, int updateId) {
        // Implement update logic if needed
        return null;
    }
}

